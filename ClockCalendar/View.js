'use strict';

function View (widget) {
    let div = document.querySelector('.ClockCalendar'),
        changeStyle = () => div.classList.toggle('hovered'),
        timeCash = widget.getWidgetValue();

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
        this.refresh(widget.getWidgetValue());
    }, false);

    div.addEventListener('contextmenu', e => {
        e.preventDefault();
        widget.switchMode();
        this.refresh(widget.getWidgetValue());
    }, false);
}