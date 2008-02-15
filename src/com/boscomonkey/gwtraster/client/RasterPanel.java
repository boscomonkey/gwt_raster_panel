package com.boscomonkey.gwtraster.client;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.SimplePanel;

public class RasterPanel extends Composite {

    protected static class Pixel extends Composite {
        public int coordX;

        public int coordY;

        public Pixel(int coordX, int coordY) {
            this.coordX = coordX;
            this.coordY = coordY;

            SimplePanel pixel = new SimplePanel();
            initWidget(pixel);
            pixel.setStyleName("cbg-RasterPanel-Pixel");
        }
    }

    private int numX;

    private int numY;

    public RasterPanel(int numX, int numY) {
        this.numX = numX;
        this.numY = numY;

        FlowPanel panel = new FlowPanel();
        initWidget(panel);
        panel.setStyleName("cbg-RasterPanel");

        HTML pixel = new HTML();
    }
}
