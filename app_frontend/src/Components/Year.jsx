import React, { Component } from 'react';
import ChartJS from 'chart.js';
import Navbar from './Partials/Navbar'

function createChartDoughnut() {
    let ctx = document.getElementById("chartDoughnut");
    let chart = new ChartJS(ctx, {
        labels: ['Grafico'],
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Grafico a torta',
                data: [2, 64, 3, 2],
                backgroundColor: "rgba(77, 209, 0, 1)",
                borderColor: 'rgba(255,255,255, 1)',
                borderWidth: 1.5
            }],
        },
        options: {
            animation: {
                duration: 3000,
            },
            legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 18
                }
            },
            scales: {
                xAxes: [{
                    display: false,
                    ticks: {
                        fontColor: "white",
                        stepSize: 1,
                        beginAtZero: true
                    },
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        display: false,
                        fontColor: "white",
                        stepSize: 1,
                        beginAtZero: true
                    },
                    gridLines: {
                        drawBorder: false,
                    },
                }]
            },
        }
    })
}

function createChartLine() {
    let ctx = document.getElementById("chartLine");
    let chart = new ChartJS(ctx, {
        type: 'line',
        label: "Media voti per anno",
        data: {
            labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
            datasets: [{
                label: 'Totale voti',
                data: [12, 19, 3, 5, 2, 3, 8, 2, 9],
                backgroundColor: 'rgba(255,0,200, 1)',
                borderColor: 'rgba(255,255,255, 1)',
                borderWidth: 1.5
            }]
        },
        options: {
            legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 18
                }
            },
            animation: {
                duration:3000,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        }
    })
}

function createChartBar() {
    let ctx = document.getElementById("chartBar");
    let chart = new ChartJS(ctx, {
        type: 'bar',
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        data: {
            labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
            datasets: [{
                label: 'Totale voti',
                data: [12, 19, 3, 5, 2, 3, 8, 2, 9],
                backgroundColor: 'rgba(0,213,255, 1)',
                borderColor: 'rgba(255,255,255, 1)',
                borderWidth: 1.5
            }]
        },
        options: {
            animation: {
                duration:3000,
            },
            legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 18
                }
            }
        }
    })
}


export default class Year extends Component {
    componentDidMount() {
        createChartDoughnut();
        createChartLine();
        createChartBar();
    }

    render = () => {
        return (
            <div>
                <Navbar />
                <section id="chartSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <canvas id="chartDoughnut">You need to enable JS</canvas>
                            </div>
                            <div className="col-lg-6">
                                <div id="statcard">
                                    <div className="row">
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-4">
                                            <h5>MEDIA TOTALE:</h5> <h3 id="statvaluepositive">+3,8%</h3>
                                        </div>
                                        <div className="col-lg-4">
                                            <h5>MEDIA TOTALE:</h5> <h3 id="statevaluenegative">-3,8%</h3>
                                        </div>
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-4">
                                            <h5>MEDIA TOTALE:</h5> <h3 id="statvaluepositive">+3,8%</h3>
                                        </div>
                                        <div className="col-lg-4">
                                            <h5>MEDIA TOTALE:</h5> <h3 id="statvaluepositive">+3,8%</h3>
                                        </div>
                                        <div className="col-lg-2"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="chartSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <canvas id="chartLine">You need to enable JS</canvas>
                            </div>
                            <div className="col-lg-6">
                                <div id="statcard">
                                    <div className="row">
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-4">
                                            <h5>MEDIA TOTALE:</h5> <h3 id="statvaluepositive">+3,8%</h3>
                                        </div>
                                        <div className="col-lg-4">
                                            <h5>MEDIA TOTALE:</h5> <h3 id="statevaluenegative">-3,8%</h3>
                                        </div>
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-4">
                                            <h5>MEDIA TOTALE:</h5> <h3 id="statvaluepositive">+3,8%</h3>
                                        </div>
                                        <div className="col-lg-4">
                                            <h5>MEDIA TOTALE:</h5> <h3 id="statvaluepositive">+3,8%</h3>
                                        </div>
                                        <div className="col-lg-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="chartSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <canvas id="chartBar">You need to enable JS</canvas>
                            </div>
                            <div className="col-lg-6">
                                <div id="statcard">
                                    <div className="row">
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-4">
                                            <h5>MEDIA TOTALE:</h5> <h3 id="statvaluepositive">+3,8%</h3>
                                        </div>
                                        <div className="col-lg-4">
                                            <h5>MEDIA TOTALE:</h5> <h3 id="statevaluenegative">-3,8%</h3>
                                        </div>
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-4">
                                            <h5>MEDIA TOTALE:</h5> <h3 id="statvaluepositive">+3,8%</h3>
                                        </div>
                                        <div className="col-lg-4">
                                            <h5>MEDIA TOTALE:</h5> <h3 id="statvaluepositive">+3,8%</h3>
                                        </div>
                                        <div className="col-lg-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    };
}

