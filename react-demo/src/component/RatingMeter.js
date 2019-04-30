import React from 'react';
import './RatingMeter.css';
import smilySVG from '../assets/smily.svg';
import grinHearts from '../assets/grin-hearts.svg';


export default class RatingMeter extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // This code is use for getting svg from fontAwesome icon name
        const smileBeam = window.FontAwesome.icon({
            prefix: 'fas',
            iconName: 'smile-beam'
        })
        var svgHtml = smileBeam.html[0];
        var liRating = document.getElementById('liRatingFontAwesome');
        
        liRating.componentOnReady().then(() => {
            liRating.setSvgString(svgHtml);
        });
    }   

    render() {
        return (
            <div>
                <div class="label-wrapper">
                    <label>Logistic Infotech Rating Component</label>
                </div>
                <div class="content-wrapper">
                    <div class="box-wrapper">
                        <div class="li-rating-wrapper">
                            <label>Default li-rating component :</label>
                            <div class="rating-holder">
                                <div class="width-height-one">
                                    <li-rating font-size="45" total-icons="3" stroke-color="#FF66E5" stroke-width="1"
                                        color="#FF99FF">
                                    </li-rating>
                                </div>
                            </div>
                        </div>

                        <div class="li-rating-wrapper">
                            <label>Default li-rating component with fill-mode: full</label>
                            <div class="rating-holder">
                                <div class="width-height-one">
                                    <li-rating font-size="45" text-icon="♬" total-icons="3" color="#660066"
                                        fill-mode="full">
                                    </li-rating>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box-wrapper">
                        <div class="li-rating-wrapper">
                            <label>Default li-rating component with fill-mode: half</label>
                            <div class="rating-holder">
                                <div class="width-height-one">
                                    <li-rating font-size="60" text-icon="❖" total-icons="3" color="rgb(0, 0, 153)"
                                        fill-mode="half">
                                    </li-rating>
                                </div>
                            </div>
                        </div>

                        <div class="li-rating-wrapper">
                            <label>Text icon with color :</label>
                            <div class="rating-holder">
                                <div class="width-height-two">
                                    <li-rating text-icon="♣" total-icons="4" stroke-color="rgb(2, 55, 176)"
                                        stroke-width="1" color="rgb(0, 102, 255)" font-size="56">
                                    </li-rating>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box-wrapper">
                        <div class="li-rating-wrapper">
                            <label>Text icon with stroke color and width :</label>
                            <div class="rating-holder">
                                <div class="width-height-two">
                                    <li-rating text-icon="♥" font-size="56" stroke-color="rgb(179, 0, 89)"
                                        stroke-width="1" color="rgb(255, 0, 128)">
                                    </li-rating>
                                </div>
                            </div>
                        </div>

                        <div class="li-rating-wrapper">
                            <label>Text icons with number of icons :</label>
                            <div class="rating-holder">
                                <div class="width-height-three">
                                    <li-rating text-icon="♠" stroke-color="rgb(7, 8, 9)" stroke-width="1"
                                        font-size="55" total-icons="6">
                                    </li-rating>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box-wrapper">
                        <div class="li-rating-wrapper">
                            <label>Font-awesome SVG icon with color :</label>
                            <div class="rating-holder">
                                <div class="width-height-four">
                                    <li-rating id="liRatingFontAwesome" total-icons="7" color="rgb(0, 153, 0)">
                                    </li-rating>
                                </div>
                            </div>
                        </div>

                        <div class="li-rating-wrapper">
                            <label>SVG icon from path :</label>
                            <div class="rating-holder">
                                <div class="width-height-five">
                                    <li-rating total-icons="8" svg-icon-path={smilySVG} color="#00ADBF">
                                    </li-rating>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box-wrapper">
                        <div class="li-rating-wrapper">
                            <label>SVG icon from path :</label>
                            <div class="rating-holder">
                                <div class="width-height-six">
                                    <li-rating svg-icon-path={grinHearts} total-icons="9" color="rgb(249, 5, 20)">
                                    </li-rating>
                                </div>
                            </div>
                        </div>

                        <div class="li-rating-wrapper">
                            <label>Default li-rating component with default value :</label>
                                <div class="rating-holder">
                                    <div class="width-height-six">
                                        <li-rating value="1.6" text-icon="✷" font-size="60" total-icons="7" 
                                            stroke-color="#5D4202" stroke-width="1" color="#D19507">
                                        </li-rating>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}