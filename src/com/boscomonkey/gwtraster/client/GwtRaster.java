package com.boscomonkey.gwtraster.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.MouseListenerAdapter;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class GwtRaster implements EntryPoint {

    protected class Dot extends HTML {
        private static final int HEIGHT = 10;
        private static final int WIDTH = 10;

        public int x;
        public int y;

        public Dot(int coordX, int coordY) {
            this.x = coordX;
            this.y = coordY;
            this.addStyleName("cbg-GwtRaster-dot");
            DOM.setStyleAttribute(getElement(), "left", String.valueOf(x
                    * WIDTH)
                    + "px");
            DOM.setStyleAttribute(getElement(), "top", String.valueOf(y
                    * HEIGHT)
                    + "px");
        }
    }

    protected MouseListenerAdapter listener = new MouseListenerAdapter() {
        private static final String CSS_MOUSEOVER = "cbg-GwtRaster-mouseover";

        public void onMouseEnter(Widget sender) {
            sender.addStyleName(CSS_MOUSEOVER);
        }

        public void onMouseLeave(Widget sender) {
            sender.removeStyleName(CSS_MOUSEOVER);
        }
    };

    /**
     * This is the entry point method.
     */
    public void onModuleLoad() {
        FlowPanel panel = new FlowPanel();
        panel.setStyleName("cbg-GwtRaster");

        for (int x = 0; x < 40; x++) {
            for (int y = 0; y < 30; y++) {
                HTML dot = new Dot(x, y);
                dot.addMouseListener(listener);
                panel.add(dot);
            }
        }

        RootPanel.get("slot1").add(panel);
    }

}
