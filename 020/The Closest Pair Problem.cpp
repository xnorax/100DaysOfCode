//
//  The Closest Pair Problem.cpp
//
//  Created by Nora AlNashwan on 2/24/18.
//  Copyright © 2018 Nora AlNashwan. All rights reserved.
//  Problem link: https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=1186
//

#include <iostream>
#include <stdio.h>
#include <math.h>
#include <vector>
#include <fstream>

using namespace std;


double dist(double x1, double y1, double x2, double y2){
    double result = pow(x1-x2,2)+pow(y1-y2,2);
    if (result>=100000000)
        return 100000000;
    return sqrt(result);
}

int main() {
    int n,i,j;
    double x,y;
    double mn=0,distance;
    vector<double> xPoints;
    vector<double> yPoints;
    //ifstream myfile;
    //myfile.open("/Users/nora/Documents/main/main/File2.in");
    
    while(cin>>n){
        
        if (n==0) {
            break;
        }
        
        for (i=0; i<n; i++) {
            cin>>x>>y;
            xPoints.push_back(x);
            yPoints.push_back(y);
        }
        
        distance = 0;
        mn = 100000000;
        for (i=0; i<n; i++) {
            for (j=i+1; j<n; j++) {
                distance = dist(xPoints[i],yPoints[i],xPoints[j],yPoints[j]);
                        if(distance<mn){
                            mn = distance;
                        }
                        //printf("distance between [%d,%d] to [%d,%d] is %f\n",points[i][0],points[i][1],points[j][0],points[j][1],distance);
            }
        }
        
        if (mn==100000000) {
            printf("INFINITY\n");
        }else{
            printf("%.4f\n",mn);
        }
        
        xPoints.clear();
        yPoints.clear();
        
    }
    
    return 0;
}
