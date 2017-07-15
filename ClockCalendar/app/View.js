'use strict';

class View {
    constructor () {
        this._container = document.querySelector('.ClockCalendar');
        this._timeCash = new Date();
    }

    showTime (widgetValue) {
        this._container.innerHTML = widgetValue;
    }

    refresh (widgetValue) {
        if (widgetValue !== this._timeCash) {
            this._container.innerHTML = widgetValue;
            this._timeCash = widgetValue;

            console.log('DOM updated');
        }
    }

    addListeners (clockCalendar) {
        this._container.addEventListener('mouseover', () => this._container.classList.toggle('hovered'), false);
        this._container.addEventListener('mouseout', () => this._container.classList.toggle('hovered'), false);

        this._container.addEventListener('click', () => {
            clockCalendar.switchFormat();
            this.refresh(clockCalendar.now);
        }, false);

        this._container.addEventListener('contextmenu', e => {
            e.preventDefault();
            clockCalendar.switchMode();
            this.refresh(clockCalendar.now);
        }, false);
    }
}

/*
function View (widget) {
    let div = document.querySelector('.ClockCalendar'),
        changeStyle = () => div.classList.toggle('hovered'),
        timeCash = widget.now;

    this.showTime = function (widgetValue) {
        div.innerHTML = widgetValue;
    };

    this.refresh = function (widgetValue) {
        if (widgetValue !== timeCash) {
            div.innerHTML = widgetValue;
            timeCash = widgetValue;

            console.log('DOM updated');
        }
    };

    div.addEventListener('mouseover', changeStyle, false);
    div.addEventListener('mouseout', changeStyle, false);

    div.addEventListener('click', () => {
        widget.switchFormat();
        this.refresh(widget.now);
    }, false);

    div.addEventListener('contextmenu', e => {
        e.preventDefault();
        widget.switchMode();
        this.refresh(widget.now);
    }, false);
}
*/