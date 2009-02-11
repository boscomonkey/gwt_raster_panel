package com.boscomonkey.gwtraster.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.gwt.user.client.ui.RootPanel;

@ExportPackage("gwtraster")
public class PanelWidget extends RasterPanel implements Exportable {
    @Export
    public PanelWidget() { super(); }

    @Export
    @Override
    public void clear() {
        super.clear();
    }

    /**
     * Appends this RasterPanel as a child of the DOM element identified by
     * "id"
     * 
     * @param id
     */
    @Export
    public void appendAsChild(String id) {
        RootPanel.get(id).add(this);
    }
}
