import FileSaver from "file-saver";
import papa from "papaparse";
import React, { Component } from "react";
import {
  Alert,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";
import Dropzone from "react-dropzone";
import templates from "../../data/templates";

class FileUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectingTemplate: false,
      currentFile: false,
    };
  }

  handleError(msg) {
    alert(`error: ${msg}`);
  }

  onDrop(acceptedFiles, rejectedFiles) {
    const files = [...acceptedFiles, ...rejectedFiles];

    if (files[0]) {
      this.setState({
        selectingTemplate: true,
        currentFile: files[0],
      });
    }
  }

  handleTemplate(template) {
    // process file into new CSV and make it download to the client
    const file = this.state.currentFile;
    const config = {
      complete: this.handleParseComplete,
      template: template,
      skipEmptyLines: true,
    };
    papa.parse(file, config);
    this.closeModal();
  }

  handleParseComplete(results, file) {
    let fields = this.template.mapping.map((mapping) => mapping.header);
    let data = [];
    results.data.forEach((item, index) => {
      if (this.template.trimHeaders > 0 && index >= this.template.trimHeaders) {
        let temp = [];
        let validated = true;
        this.template.mapping.forEach((mapping) => {
          let value = item[mapping.from];

          // force positive numbers
          if (mapping.force_positive === true) {
            if (typeof value === "string") value = value.replace("-", "");
            if (typeof value === "number" && value < 0) value = value * -1;
          }

          if (this.template.name === "postfinance_debit_ynab" && value) {
            // field regex cleaning
            const index = value.indexOf("XXXX");
            if (index > -1) {
              value = value.substring(index + 9);
            }

            const isTwint = value.indexOf("TWINT") > -1;
            if (isTwint) {
              const isTwintReceive = value.indexOf("RÉCEPTION D'ARGENT TWINT");
              if (isTwintReceive > -1) {
                value = "twint in - " + value.substring(69, value.length);
              }
  
              const isTwintPay = value.indexOf("ACHAT/PRESTATION TWINT");
              if (isTwintPay > -1) {
                value = "twint out - " + value.substring(37, value.length);
              }
            } else {
              const index2 = value.indexOf("COMMUNICATIONS:");
              if (index2 > -1) {
                value = value.substring(index2 + 15);
              }
            }
          }

          temp[mapping.to] = value;
          if (mapping.required && !item[mapping.from]) {
            validated = false;
          }
        });
        if (validated) data.push(temp);
      }
    });

    const object = {
      fields: fields,
      data: data,
    };

    const finalResult = papa.unparse(object);
    const blob = new Blob([finalResult], { type: "text/csv;charset=utf-8" });
    FileSaver.saveAs(blob, `${this.template.name}.csv`);
  }

  closeModal() {
    this.setState({
      selectingTemplate: false,
      currentFile: false,
    });
  }

  render() {
    return (
      <div>
        <Alert>Drop your csv file here</Alert>
        <Dropzone
          onDrop={(a, b) => this.onDrop(a, b)}
          style={{
            width: "100%",
            height: "300px",
            borderRadius: "3px",
            border: "5px dashed lightgrey",
          }}
          accept="text/plain, text/csv, application/vnd.ms-excel"
          multiple={false}
        />
        <Modal show={this.state.selectingTemplate}>
          <ModalHeader>
            Choose you template for: <b>{this.state.currentFile.name}</b>
          </ModalHeader>
          <ModalBody>
            {templates.map((t) => {
              return (
                <Button
                  block={true}
                  bsStyle={t.buttonStyle}
                  onClick={() => this.handleTemplate(t)}
                  key={t.name}
                >
                  {t.title}
                </Button>
              );
            })}
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => this.closeModal()}
              type="button"
              variant="danger"
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default FileUploader;
