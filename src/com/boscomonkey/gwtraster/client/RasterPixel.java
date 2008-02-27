package com.boscomonkey.gwtraster.client;

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.SimplePanel;

class RasterPixel extends Composite {

    public static final String CSS_ENGAGED = "cbg-RasterPixel-engaged";

    private XyCoord coord;
    private int width;
    private int height;

    public RasterPixel(int x, int y, int dimension, boolean border) {
        this(x, y, dimension, dimension, border);
    }

    public RasterPixel(int x, int y, int w, int h, boolean border) {
        coord = new XyCoord(x, y);
        this.width = w;
        this.height = h;

        SimplePanel dot = new SimplePanel();
        initWidget(dot);
        dot.addStyleName("cbg-RasterPixel");

        String pixelX = String.valueOf(coord.getX() * width) + "px";
        String pixelY = String.valueOf(coord.getY() * height) + "px";
        DOM.setStyleAttribute(getElement(), "left", pixelX);
        DOM.setStyleAttribute(getElement(), "top", pixelY);

        this.setPixelSize(border ? width - 1 : width,
                border ? height - 1 : height);
    }

    public XyCoord getCoord() {
        return coord;
    }

    public String toString() {
        return "(" + coord.getX() + ", " + coord.getY() + ")";
    }

}