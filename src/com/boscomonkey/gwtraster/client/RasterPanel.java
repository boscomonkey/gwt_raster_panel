package com.boscomonkey.gwtraster.client;

import org.timepedia.exporter.client.Exportable;

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.FocusPanel;
import com.google.gwt.user.client.ui.MouseListenerAdapter;
import com.google.gwt.user.client.ui.Widget;

/**
 * A RasterPanel allows users to draw on it like a paint program. Mouse down
 * while moving the mouse will cause the dots under the mouse cursor to light
 * up. When the mouse button is up, nothing is drawn.
 * 
 * @author boscoso
 */
public class RasterPanel extends Composite implements Exportable {
    private int nPixelsX;
    private int nPixelsY;
    private int pixWidth;
    private int pixHeight;
    private boolean borderedDots;
    private int width;
    private int height;
    private FlowPanel dotsPanel;

    private boolean xyFlags[][];
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

                if (! xyFlags[i][j]) {
                    RasterPixel dot = new RasterPixel(i, j, pixWidth,
                            pixHeight, borderedDots);
                    xyFlags[i][j] = true;

                    dotsPanel.add(dot);
                    dot.addStyleName(RasterPixel.CSS_ENGAGED);
                }
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
     * Creates a RasterPanel of 150x30 dots (each of which is 4x4 screen pixels
     * in size) with each dot having a border.
     */
    public RasterPanel() {
        this(150, 30, 4, true);
    }

    /**
     * Creates a RasterPanel of "numX" by "numY" dots where each dot is
     * "dimension" screen pixels square. When "border" is true, each dot has a
     * border.
     * 
     * @param numX
     * @param numY
     * @param dimension
     * @param border
     */
    public RasterPanel(int numX, int numY, int dimension, boolean border) {
        this(numX, numY, dimension, dimension, border);
    }

    /**
     * Creates a RasterPanel of "numX" by "numY" dots where each dot is "pixW"
     * pixels wide by "pixY" pixels high. When "border" is true, each dot has a
     * border.
     * 
     * @param numX
     * @param numY
     * @param pixW
     * @param pixY
     * @param border
     */
    public RasterPanel(int numX, int numY, int pixW, int pixY, boolean border) {
        nPixelsX = numX;
        nPixelsY = numY;
        pixWidth = pixW;
        pixHeight = pixY;
        borderedDots = border;

        // this panel captures mouse moves
        FocusPanel focus = new FocusPanel();
        initWidget(focus);
        focus.addStyleName("cbg-RasterPanel");
        focus.addMouseListener(mouseListener);

        // set explicit width and height
        width = nPixelsX * pixWidth;
        height = nPixelsY * pixHeight;
        focus.setPixelSize(width, height);

        dotsPanel = new FlowPanel();
        focus.setWidget(dotsPanel);
        dotsPanel.addStyleName("cbg-RasterPanel-panel");

        xyFlags = new boolean[nPixelsX][];
        for (int x = 0; x < nPixelsX; x++)
            xyFlags[x] = new boolean[nPixelsY];
    }

    /**
     * Clears all lit dots from this RasterPanel.
     */
    public void clear() {
        for (int i = 0, n = dotsPanel.getWidgetCount(); i < n; i++) {
            RasterPixel pix = (RasterPixel)dotsPanel.getWidget(i);
            pix.removeStyleName(RasterPixel.CSS_ENGAGED);

            XyCoord coord = pix.getCoord();
            xyFlags[coord.x()][coord.y()] = false;
        }
        dotsPanel.clear();
    }

    /**
     * @return array of XyCoord's for dots that are lit
     */
    public XyCoord[] getCoords() {
        final int n = dotsPanel.getWidgetCount();
        XyCoord[] coords = new XyCoord[n];

        for (int i = 0; i < n; i++) {
            Widget w = dotsPanel.getWidget(i);
            RasterPixel p = (RasterPixel)w;
            coords[i] = p.getCoord();
        }

        return coords;
    }
}
