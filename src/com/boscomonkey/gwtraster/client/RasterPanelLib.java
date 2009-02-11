package com.boscomonkey.gwtraster.client;

import org.timepedia.exporter.client.Exporter;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class RasterPanelLib implements EntryPoint {

    /**
     * This is the entry point method.
     */
    public void onModuleLoad() {
        try {
            Exporter exporter = (Exporter) GWT.create(PanelWidget.class);
            exporter.export();
        } catch (Exception e) {
            Window.alert("Cannot load '" + this.getClass().getName() + "': "
                    + e.toString());
        }
    }
}
