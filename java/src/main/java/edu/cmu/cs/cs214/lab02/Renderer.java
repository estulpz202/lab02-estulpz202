package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;

public class Renderer {
    private Shape figure;
    
    Renderer(Shape figure) {
        this.figure = figure;
    }

    void draw() {
        double area = figure.getArea();

        // assume implementation

        System.out.println("Shape printed\n" + "Its area is " + area);
    }
}
