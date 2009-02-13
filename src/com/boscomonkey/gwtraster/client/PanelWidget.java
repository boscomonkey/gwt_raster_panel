package com.boscomonkey.gwtraster.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.user.client.ui.RootPanel;

@ExportPackage("gwtraster")
public class PanelWidget extends RasterPanel implements Exportable {

    /** JavaScript overlay type that represents {x:1, y:2} */
    public static class Dot extends JavaScriptObject {
        protected Dot() {}
        
        public final native int x() /*-{ return this.x; }-*/;
        public final native int y() /*-{ return this.y; }-*/;
    }

    @Export
    public PanelWidget() { super(); }

    /**
     * Adds this RasterPanel as a child to the DOM element identified by
     * "id"
     * 
     * @param id
     */
    @Export
    public void addTo(String id) {
        RootPanel.get(id).add(this);
    }

    @Export
    @Override
    public void clear() {
        super.clear();
    }
    
    /**
     * @return native JavaScript array of Dot JSON objects - {x:..., y:...}
     */
    @Export
    public JsArray<Dot> getDots() {
        XyCoord[] coords = getCoords();
        JsArray<Dot> dots = newArray();
        for (int i = 0; i < coords.length; i++)
            dots.set(i, newDot(coords[i].x(), coords[i].y()));

        return dots;
    }
    
    private final native JsArray<Dot> newArray() /*-{ return []; }-*/;
    
    private final native Dot newDot(int i, int j) /*-{ return {x:i, y:j}; }-*/;
}
