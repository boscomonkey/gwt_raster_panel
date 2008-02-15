package com.boscomonkey.gwtraster.client;

import java.util.HashSet;
import java.util.Iterator;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.FocusPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.MouseListener;
import com.google.gwt.user.client.ui.MouseListenerAdapter;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class GwtRaster implements EntryPoint {

    private HashSet mousedOvers = new HashSet();
    private Button btnClear = new Button("Clear");

    protected class Dot extends HTML {
        public static final String CSS_MOUSEOVER = "cbg-GwtRaster-mouseover";
        private static final int HEIGHT = 4;
        private static final int WIDTH = 4;

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

    private boolean bMouseDown = false;
    protected MouseListenerAdapter moveListener = new MouseListenerAdapter() {
        public void onMouseEnter(Widget sender) {
            if (bMouseDown) {
                sender.addStyleName(Dot.CSS_MOUSEOVER);
                mousedOvers.add(sender);
            }
        }
    };
    private MouseListenerAdapter mouseBtnListener = new MouseListenerAdapter() {
        public void onMouseDown(Widget sender, int x, int y) {
            if (!bMouseDown) {
                DOM.setCapture(sender.getElement());
                bMouseDown = true;
            }
        }
        public void onMouseUp(Widget sender, int x, int y) {
            if (bMouseDown) {
                DOM.releaseCapture(sender.getElement());
                bMouseDown = false;
            }
        }
    };

    /**
     * This is the entry point method.
     */
    public void onModuleLoad() {
        FocusPanel focus = new FocusPanel();
        focus.addMouseListener(mouseBtnListener);

        FlowPanel panel = new FlowPanel();
        focus.setWidget(panel);
        panel.setStyleName("cbg-GwtRaster");

        for (int x = 0; x < 100; x++) {
            for (int y = 0; y < 75; y++) {
                HTML dot = new Dot(x, y);
                dot.addMouseListener(moveListener);
                panel.add(dot);
            }
        }

        RootPanel.get("slot1").add(focus);

        // set up "Clear" button
        btnClear.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
                for (Iterator iter = mousedOvers.iterator(); iter.hasNext();) {
                    Widget w = (Widget) iter.next();
                    w.removeStyleName(Dot.CSS_MOUSEOVER);
                }
                mousedOvers.clear();
            }
        });
        RootPanel.get("slot2").add(btnClear);
    }

}
