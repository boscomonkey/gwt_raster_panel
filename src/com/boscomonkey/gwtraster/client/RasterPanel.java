package com.boscomonkey.gwtraster.client;

import java.util.HashSet;
import java.util.Iterator;

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.FocusPanel;
import com.google.gwt.user.client.ui.MouseListenerAdapter;
import com.google.gwt.user.client.ui.Widget;

public class RasterPanel extends Composite {
    private int nPixelsX;
    private int nPixelsY;
    private int pixWidth;
    private int pixHeight;
    private int width;
    private int height;

    private RasterPixel matrix[][];
    private HashSet engagedPixels = new HashSet();
    private boolean bMouseDown = false;
    private MouseListenerAdapter mouseListener = new MouseListenerAdapter() {
        public void onMouseDown(Widget sender, int x, int y) {
            if (!bMouseDown) {
                DOM.setCapture(sender.getElement());
                bMouseDown = true;
            }
        }
 
        public void onMouseMove(Widget sender, int x, int y) {
            if (bMouseDown && x >= 0 && y >= 0 && x < width && y < height) {
                int i = x / pixWidth;
                int j = y / pixHeight;
                RasterPixel dot = matrix[i][j];

                dot.addStyleName(RasterPixel.CSS_ENGAGED);
                engagedPixels.add(dot);
            }
        }

        public void onMouseUp(Widget sender, int x, int y) {
            if (bMouseDown) {
                DOM.releaseCapture(sender.getElement());
                bMouseDown = false;
            }
        }
    };

    public RasterPanel(int numX, int numY, int dimension, boolean border) {
        this(numX, numY, dimension, dimension, border);
    }

    public RasterPanel(int numX, int numY, int pixW, int pixY,
            boolean border) {
        nPixelsX = numX;
        nPixelsY = numY;
        pixWidth = pixW;
        pixHeight = pixY;

        // this panel captures mouse moves
        FocusPanel focus = new FocusPanel();
        initWidget(focus);
        focus.addStyleName("cbg-RasterPanel");
        focus.addMouseListener(mouseListener);

        // set explicit width and height
        width = nPixelsX * pixWidth;
        height = nPixelsY * pixHeight;
        focus.setPixelSize(width, height);

        // this panel contains all the pixels
        FlowPanel panel = new FlowPanel();
        focus.setWidget(panel);
        panel.addStyleName("cbg-RasterPanel-panel");

        matrix = new RasterPixel[nPixelsX][];
        for (int x = 0; x < nPixelsX; x++) {
            matrix[x] = new RasterPixel[nPixelsY];

            for (int y = 0; y < nPixelsY; y++) {
                RasterPixel dot = new RasterPixel(x, y, pixWidth,
                        pixHeight, border);
                panel.add(dot);

                matrix[x][y] = dot;
            }
        }
    }

    public void clear() {
        for (Iterator iter = engagedPixels.iterator(); iter.hasNext();) {
            Widget w = (Widget) iter.next();
            w.removeStyleName(RasterPixel.CSS_ENGAGED);
        }
        engagedPixels.clear();
    }
}

