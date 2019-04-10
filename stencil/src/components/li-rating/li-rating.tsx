import { Component, State, Prop, Event, EventEmitter, Method } from '@stencil/core';

@Component({
    tag: 'li-rating',
    styleUrl: 'li-rating.css',
    shadow: false
})

export class LiRating {

    private meterTag?: HTMLMeterElement;


    // This properties used in all Icon.
    @Prop() color: string = '';
    @Prop() opacity: any = 0.4;
    @Prop() totalIcons: any = 5;
    @Prop() currentRate: any = 0;
    @Prop() svgIconPath: any = '';
    @Prop() textIcon: any = '★';

    // This properties is only use for TextIcon.
    @Prop() strokeColor: string = '';
    @Prop() strokeWidth: string = '';
    @Prop() fontSize: any = 75;

    @State() currentRateParent: any = 0;
    @State() maxRating: number = 100;

    @Event() onChangeRating: EventEmitter;

    render() {
        return (
            <div class="rating-meter-container" >
                <meter
                    min={0}
                    max={this.maxRating}
                    value={this.currentRateParent}
                    onClick={(e) => this.changeRating(e)}
                    onMouseOut={() => this.setCurrentValue()}
                    onMouseMove={(e) => this.onMouseHover(e)}
                    ref={el => this.meterTag = el as HTMLMeterElement}
                />
            </div >
        )
    }

    componentWillLoad() {
        // console.log('component will load calls');
        this.currentRateParent = this.currentRate;
        this.maxRating = (Number(this.totalIcons));
    }

    componentDidLoad() {
        // console.log('component did load calls');
        if (this.svgIconPath) {
            this.getSvgFromPath(this.svgIconPath);
        } else if (this.textIcon) {
            this.setTextIcon(this.textIcon);
        }
    }

    // This method used for set FontAwesome SVG image.
    @Method()
    setSvgString(svgHtml) {
        // console.log('setSvgString Method calls', svgHtml);
        var svgElmtMain = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElmtMain.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgElmtMain.setAttribute("color", this.color)

        svgElmtMain.innerHTML = svgHtml;

        this.setElementAsSelectedUnselected(svgElmtMain);
    }

    // This methos used fot TEXT set in SVG.
    setTextIcon(textIcon) {
        // console.log('setTextIcon Method calls', textIcon);
        var svgElmt = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElmt.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        var svgText = document.createElement("text");
        svgText.setAttribute("x", "50%");
        svgText.setAttribute("y", "65%");
        svgText.setAttribute("fill", this.color);
        svgText.setAttribute("stroke", this.strokeColor);
        svgText.setAttribute("stroke-width", this.strokeWidth);
        svgText.setAttribute("font-size", this.fontSize);
        svgText.setAttribute("text-anchor", "middle");
        svgText.setAttribute("dominant-baseline", "middle");

        svgText.innerHTML = textIcon;

        svgElmt.appendChild(svgText);

        this.setElementAsSelectedUnselected(svgElmt);
    }

    // This methos used for getting SVG file from give PATH.
    getSvgFromPath(svgIconPath) {
        // console.log('setTextIcon Method calls', svgIconPath);
        var fileRequest = new XMLHttpRequest();
        var self = this;
        fileRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log('DATA = >', this.responseText);
                var svgElmtMain = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svgElmtMain.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                svgElmtMain.setAttribute("color", self.color)

                svgElmtMain.innerHTML = this.responseText;

                self.setElementAsSelectedUnselected(svgElmtMain);
            }
        }
        fileRequest.open("GET", svgIconPath, true);
        fileRequest.send();
    }

    // This common funcation is used for set SVG as selected or unselected SVG.
    setElementAsSelectedUnselected(svgElmtMain) {
        // console.log('setElementAsSelectedUnselected method calls', svgElmtMain);
        var selectedSvg = svgElmtMain.cloneNode(true);
        var unSelectedSvg = svgElmtMain.cloneNode(true);

        var fullWidth = this.meterTag.offsetWidth;

        unSelectedSvg['setAttribute']('fill-opacity', this.opacity);
        unSelectedSvg['setAttribute']('width', (fullWidth / this.totalIcons));
        selectedSvg['setAttribute']('width', (fullWidth / this.totalIcons));

        this.meterTag.style.setProperty('--selected-icon-bg-url', `url('data:image/svg+xml,` + selectedSvg['outerHTML'] + `') 0 / auto 100%`);
        this.meterTag.style.setProperty('--unselected-icon-bg-url', `url('data:image/svg+xml,` + unSelectedSvg['outerHTML'] + `') 0 / auto 100%`);
    }

    // This method calls when mouse hover event fire.
    onMouseHover(e) {
        // console.log('mouse move event calls', e);
        var valueHover = this.calculateCurrentRating(e);
        this.currentRateParent = valueHover;
    }

    // This method calls when user clicks on li-rating and getting for value of rating.
    changeRating(e) {
        // console.log('update rate event calls', e);
        var newRate = this.calculateCurrentRating(e);
        console.log('VALUE =>', newRate.toFixed(2));
        this.onChangeRating.emit(newRate.toFixed(2));
    }

    // This methos calculates the current rating value. 
    calculateCurrentRating(event) {
        // console.log('calculate current rate calls =>', event);
        var offsetX = event.offsetX;
        var maxVal = parseInt(event.target.getAttribute('max'), 10);
        var newRate = (offsetX / event.target.clientWidth) * maxVal;
        return newRate;
    }

    // This method sets default currentRate.
    setCurrentValue() {
        // console.log('set current value method calls');
        this.currentRateParent = this.currentRate;
    }
}