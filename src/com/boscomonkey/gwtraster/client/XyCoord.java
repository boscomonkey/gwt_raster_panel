package com.boscomonkey.gwtraster.client;

import com.google.gwt.user.client.rpc.IsSerializable;

/**
 * Serializable X,Y coordinates for sending signature pixel coordinates back to
 * the server.
 * 
 * @author bosco
 * 
 */
public class XyCoord implements IsSerializable {

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

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

}
