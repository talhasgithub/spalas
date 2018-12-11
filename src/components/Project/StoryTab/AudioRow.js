import React, { Component } from "react";
import WaveSurfer from "wavesurfer.js";
export default class AudioRow extends Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.stopAudio = this.stopAudio.bind(this);
    this.wavesurfer = null;
  }

  componentDidMount() {
    let containerClass = "#waveform" + this.props.content;
    console.log("container");
    console.log(containerClass);
    this.wavesurfer = WaveSurfer.create({
      container: containerClass,
      waveColor: "#ebf0f6",
      progressColor: "#FF7E82",
      cursorWidth: 0
    });
    this.wavesurfer.load(
      "https://s3-eu-west-1.amazonaws.com/lifeandstory/uploads/08161d74-a805-4b4d-96f6-4407527af7e6airplane-landing_daniel_simion.mp3"
    );
  }

  playAudio(e) {
    e.preventDefault();
    this.wavesurfer.play();
  }
  pauseAudio(e) {
    e.preventDefault();
    this.wavesurfer.pause();
  }
  stopAudio(e) {
    e.preventDefault();
    this.wavesurfer.stop();
  }
  componentWillUnmount() {
    this.wavesurfer.destroy();
  }
  render() {
    let containerClass = "waveform" + this.props.content;
    console.log("rednder");
    console.log(containerClass);
    return (
      <tr>
        <td width="30%" className="tbl-title-lg">
          <i className="fos-icon audio-file-icon" />
          Name
        </td>
        <td width="10%">
          <span>12-16-2018</span>
        </td>
        <td width="15%">
          <div className="control-box">
            <button className="audio-play mx-2" onClick={this.playAudio}>
              <i className="fa fa-play" style={{ color: "darkgrey" }} />
            </button>
            <button className="audio-pause mx-2" onClick={this.pauseAudio}>
              <i className="fa fa-pause" style={{ color: "darkgrey" }} />
            </button>
            <button className="audio-stop mx-2" onClick={this.stopAudio}>
              <i className="fa fa-stop" style={{ color: "darkgrey" }} />
            </button>
          </div>
        </td>
        <td colSpan="2">
          <div id={containerClass} />
        </td>
        <td width="10%" className="txt-center">
          <i className="fos archive-icon float-none" />
        </td>
      </tr>
    );
  }
}
