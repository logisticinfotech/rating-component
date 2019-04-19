import { Component, State, Prop, Event, EventEmitter, Method, Watch } from '@stencil/core';

@Component({
    tag: 'li-rating',
    styleUrl: 'li-rating.css',
    shadow: false
})

export class LiRating {

    private meterTag?: HTMLMeterElement;
    @Event() input: EventEmitter;

    @Prop({
        mutable: true,
        reflectToAttr: true
    }) value: string = '0';
    @Watch('value')
    watchHandlerForValue(newValue: string) {
        // console.log('value old : ' + oldValue + ' New value: ' + newValue);
        this.value = newValue;
        this.refresh();
    }

    // This properties used in all Icon.
    @Prop() color: string = 'black';
    @Watch('color')
    watchHandlerForColor(newValue: string) {
        this.colorInside = newValue.includes("#") ? this.convertHexToRGB(newValue) : newValue;
        // console.log('color old : ' + oldValue + ' New value: ' + newValue);
        this.refresh();
    }

    @Prop() fillMode: string = 'precise';
    @Watch('fillMode')
    watchHandlerForFillMode() {
        // console.log('fillMode old : ' + oldValue + ' New value: ' + newValue);
        this.refresh();
    }

    @Prop() opacity: any = 0.3;
    @Watch('opacity')
    watchHandlerForOpacity() {
        // console.log('opacity old : ' + oldValue + ' New value: ' + newValue);
        this.refresh();
    }

    @Prop() totalIcons: any = 5;
    @Watch('totalIcons')
    watchHandlerForTotalIcons(newValue: number) {
        this.maxRating = (Number(newValue));
        // console.log('totalIcons old : ' + oldValue + ' New value: ' + newValue);
        this.refresh();
    }

    @Prop() svgIconPath: any = '';
    @Watch('svgIconPath')
    watchHandlerForSvgIconPath() {
        // console.log('svgIconPath old : ' + oldValue + ' New value: ' + newValue);
        this.refresh();
    }

    @Prop() textIcon: any = '★';
    @Watch('textIcon')
    watchHandlerForTextIcon() {
        // console.log('textIcon old : ' + oldValue + ' New value: ' + newValue);
        this.refresh();
    }

    // This properties is only use for TextIcon.
    @Prop() strokeColor: string = 'black';
    @Watch('strokeColor')
    watchHandlerForStrokeColor(newValue: string) {
        this.strokeColorInside = newValue.includes("#") ? this.convertHexToRGB(newValue) : newValue;
        // console.log('strokeColor old : ' + oldValue + ' New value: ' + newValue);
        this.refresh();
    }

    @Prop() strokeWidth: string = '0';
    @Watch('strokeWidth')
    watchHandlerForStrokeWidth() {
        // console.log('strokeWidth old : ' + oldValue + ' New value: ' + newValue);
        this.refresh();
    }

    @Prop() fontSize: any = 45;
    @Watch('fontSize')
    watchHandlerForFontSize() {
        // console.log('fontSize old : ' + oldValue + ' New value: ' + newValue);
        this.refresh();
    }

    @State() currentRateParent: any = 0;
    @State() maxRating: number = 100;
    @State() fontAwesomeSvgIcon: string;
    @State() colorInside: string;
    @State() strokeColorInside: string;


    render() {
        return (
            <div class="rating-meter-container" >
                <meter
                    min={0}
                    max={this.maxRating}
                    value={this.value}
                    onClick={(e) => this.changeRating(e)}
                    // onMouseOut={() => this.setCurrentValue()}
                    // onMouseMove={(e) => this.onMouseHover(e)}
                    ref={el => this.meterTag = el as HTMLMeterElement}
                />
            </div >
        )
    }

    componentWillLoad() {
        // console.log('component will load calls');
        this.maxRating = (Number(this.totalIcons));
        this.colorInside = this.color.includes("#") ? this.convertHexToRGB(this.color) : this.color;
        this.strokeColorInside = this.strokeColor.includes("#") ? this.convertHexToRGB(this.strokeColor) : this.strokeColor;
    }

    componentDidLoad() {
        // console.log('component did load calls');
        this.refresh();
    }

    refresh() {
      if (this.textIcon) {
        this.setTextIcon();
      } else if (this.svgIconPath) {
        this.getSvgFromPath();
      } else if (this.fontAwesomeSvgIcon) {
        this.setSvgString(this.fontAwesomeSvgIcon);
      }
    }

    // This method used for set FontAwesome SVG image.
    @Method()
    setSvgString(svgHtml) {
        // console.log('setSvgString Method calls', svgHtml);
        this.fontAwesomeSvgIcon = svgHtml;
        var svgElmtMain = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElmtMain.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgElmtMain.setAttribute("color", this.colorInside)

        svgElmtMain.innerHTML = svgHtml;

        this.setElementAsSelectedUnselected(svgElmtMain);
    }

    // This methos used fot TEXT set in SVG.
    setTextIcon() {
        // console.log('setTextIcon Method calls', textIcon);
        var svgElmt = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElmt.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        var svgText = document.createElement("text");
        svgText.setAttribute("x", "50%");
        svgText.setAttribute("y", "65%");
        svgText.setAttribute("fill", this.colorInside);
        svgText.setAttribute("stroke", this.strokeColorInside);
        svgText.setAttribute("stroke-width", this.strokeWidth);
        svgText.setAttribute("font-size", this.fontSize);
        svgText.setAttribute("text-anchor", "middle");
        svgText.setAttribute("dominant-baseline", "middle");

        svgText.innerHTML = this.textIcon;

        svgElmt.appendChild(svgText);

        this.setElementAsSelectedUnselected(svgElmt);
    }

    // This methos used for getting SVG file from give PATH.
    getSvgFromPath() {
        // console.log('setTextIcon Method calls', svgIconPath);
        var fileRequest = new XMLHttpRequest();
        var self = this;
        fileRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var svgElmtMain = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svgElmtMain.setAttribute("xmlns", "http://www.w3.org/2000/svg");

                // var svgElmtMain = document.createElement(this.responseText);
                svgElmtMain.setAttribute("color", self.colorInside)

                svgElmtMain.innerHTML = this.responseText;

                self.setElementAsSelectedUnselected(svgElmtMain);
            }
        }
        fileRequest.open("GET", this.svgIconPath, true);
        fileRequest.send();
    }

    // This common funcation is used for set SVG as selected or unselected SVG.
    setElementAsSelectedUnselected(svgElmtMain) {
        var selectedSvg = svgElmtMain.cloneNode(true);
        var unSelectedSvg = svgElmtMain.cloneNode(true);

        var fullWidth = this.meterTag.offsetWidth;

        unSelectedSvg['setAttribute']('fill-opacity', this.opacity);
        unSelectedSvg['setAttribute']('width', (fullWidth / this.totalIcons));

        selectedSvg['setAttribute']('width', (fullWidth / this.totalIcons));

        this.meterTag.style.setProperty('--unselected-icon-bg-url', `url('data:image/svg+xml,` + unSelectedSvg['outerHTML'] + `') 0 / auto 100%`);
        this.meterTag.style.setProperty('--selected-icon-bg-url', `url('data:image/svg+xml,` + selectedSvg['outerHTML'] + `') 0 / auto 100%`);
    }

    // This method calls when user clicks on li-rating and getting for value of rating.
    changeRating(e) {
        this.value = this.calculateCurrentRating(e).toString();
        // console.log('VALUE =>', this.value);
        this.input.emit();
    }

    // This methos calculates the current rating value.
    calculateCurrentRating(event) {
        // console.log('calculate current rate calls =>', event);
        var offsetX = event.offsetX;
        var maxVal = parseInt(event.target.getAttribute('max'), 10);
        var newRate = (offsetX / event.target.clientWidth) * maxVal;
        let newRatingValue;
        if ((this.fillMode).toLowerCase() === 'full') {
            newRatingValue = Math.ceil(newRate);
        } else if ((this.fillMode).toLowerCase() === 'half') {
            newRatingValue = (newRate % 1) > 0.50 ? Math.ceil(newRate) : (Math.floor(newRate) + 0.50);
        } else {
            newRatingValue = newRate.toFixed(2);
        }
        return Number(newRatingValue);
    }

    // This method converts HexColor into RGB
    convertHexToRGB(hex) {
        if (typeof hex !== 'string' || hex[0] !== '#') return null; // or return 'transparent'

        const stringValues = (hex.length === 4)
            ? [hex.slice(1, 2), hex.slice(2, 3), hex.slice(3, 4)].map(n => `${n}${n}`)
            : [hex.slice(1, 3), hex.slice(3, 5), hex.slice(5, 7)];
        const intValues = stringValues.map(n => parseInt(n, 16));

        return `rgb(${intValues.join(', ')})`;
    }
}
