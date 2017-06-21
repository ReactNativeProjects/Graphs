//npm i react-native-mp-android-chart --save

/*android/build.gradle

allprojects {
    repositories {
        ...

        maven { url "https://jitpack.io" }    // used for MPAndroidChart
    }
}


android/settings.gradle

include ':reactNativeMPAndroidChart'
project(':reactNativeMPAndroidChart').projectDir = new File(
  rootProject.projectDir,
  '../node_modules/react-native-mp-android-chart/android'
)


android/app/build.gradle

dependencies {
    ...
    compile project(':reactNativeMPAndroidChart')
}


MainApplication.java

On top where imports are:

import com.github.reactNativeMPAndroidChart.MPAndroidChartPackage;
Add package in getPackages method:

protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new MPAndroidChartPackage()             // <----- Add this
    );
}*/
//npm install immutability-helper --save-dev
//npm install immutability-helper --save-dev

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import {BarChart} from 'react-native-mp-android-chart';
export default class BarChartComponent extends Component {
  constructor() 
  {
    super();

    this.state = {
                      legend: {
                        enabled: false,
                        textSize: 14,
                        form: 'SQUARE',
                        formSize: 14,
                        xEntrySpace: 10,
                        yEntrySpace: 5,
                        formToTextSpace: 5,
                        wordWrapEnabled: true,
                        maxSizePercent: 0.5
                      },
                      data: {
                              datasets: [{
                                          yValues: [100, 105, 102, 110, 114, 109, 105, 99, 95],
                                          label: 'Bar dataset',
                                          config: {
                                                    color: 'teal',
                                                    barSpacePercent: 40,
                                                    barShadowColor: 'lightgrey',
                                                    highlightAlpha: 90,
                                                    highlightColor: 'red'
                                                  }
                                        }],
                              xValues: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
                            }
                    };
  }

  render() {
              return (
                        <View style={styles.mainDiv}>
                          <ScrollView>
                            <View style={styles.chartHolder}>
                                <Text style={styles.chartHeading}>BAR CHART</Text>
                                <BarChart
                                  style={styles.barChart}
                                  data={this.state.data}
                                  animation={{durationX: 2000}}
                                  legend={this.state.legend}
                                  gridBackgroundColor={'#ffffff'}
                                  drawBarShadow={false}
                                  drawValueAboveBar={true}
                                  drawHighlightArrow={true}
                                />
                            </View>
                          </ScrollView>
                        </View>
                    );
  }
}
{/*<View style={styles.mainDiv}>
                          <View style={styles.chartHolder}>
                                <Text style={styles.chartHeading}>BAR CHART</Text>
                                <BarChart
                                  style={styles.barChart}
                                  data={this.state.data}
                                  animation={{durationX: 2000}}
                                  legend={this.state.legend}
                                  gridBackgroundColor={'#ffffff'}

                                  drawBarShadow={false}
                                  drawValueAboveBar={true}
                                  drawHighlightArrow={true}
                                />
                          </View>
                        </View>*/}
const styles = StyleSheet.create({
  chartHolder : {
        backgroundColor : 'white',
        marginRight :20,
        marginLeft :20,
        marginTop :10,
        marginBottom :10,
        alignItems:'center',
        borderRadius:10,
        shadowColor: '#000000',
        shadowOffset: {
                width: 0,
                height: 3
            },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    chartHeading:{
        color:'black',
        fontSize:15,
        marginTop:10
     },
    barChart: {
        height: 300,
        width: 300,
        margin:25,
        marginTop:10
    },
    mainDiv:{
        backgroundColor:'#DCDCDC',
        flex:1
    },
});

AppRegistry.registerComponent('BarChartComponent', () => BarChartComponent);
