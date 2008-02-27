package com.boscomonkey.gwtraster.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class GwtRaster implements EntryPoint {

    /**
     * This is the entry point method.
     */
    public void onModuleLoad() {
        final RasterPanel rasterPanel = new RasterPanel(150, 30, 4, true);
        RootPanel.get("slot1").add(rasterPanel);

        // set up "Clear" button
        Button btnClear = new Button("Clear");
        btnClear.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
                rasterPanel.clear();
            }
        });
        RootPanel.get("slot2").add(btnClear);
    }

}
