package com.boscomonkey.gwtraster.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.gwt.user.client.rpc.IsSerializable;

/**
 * Serializable X,Y coordinates for sending signature pixel coordinates back to
 * the server.
 * 
 * @author bosco
 * 
 */
@Export
@ExportPackage("gwtraster")
public class XyCoord implements Exportable, IsSerializable {

    private int x;

    private int y;

    /**
     * Zero argument constructor needed for serialization
     */
    public XyCoord() {
    }

    public XyCoord(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int x() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int y() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public String toString() {
        return "(" + this.x + ", " + this.y + ")";
    }
}
