import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
const logo = require('./resources/muti-1_1x.jpg');
import './home.scss';

export const Home = () => {
    return (
        <div className="full-height home-wrapper">
            <div className="vcenter">
                <Grid>
                    <Row>
                        <Col md={6} className="align-middle">
                            <img src={logo} className="logo"/>
                        </Col>
                        <Col md={6} className="page-info align-middle">
                            <Row>
                                <Col xs={12}>
                                Asociaţia “VELOPOWER” are ca scop promovarea mersului pe bicicletă în general,
                                privit ca mijloc de recreere, mijloc ecologic de transport şi mijloc de afirmare pe plan sportiv
                                la nivel de amatori (competiţional), organizarea şi practicarea ciclismului,
                                cu precădere a ciclismului montan şi de şosea,
                                promovarea alergării de anduranţă indiferent de teren (montan, urban, sală, stadion)
                                şi obţinerii unor rezultate pe plan naţional şi internaţional din participarea la concursuri,
                                precum şi dezvoltarea durabilă şi protecţia mediului, implicarea socială în aceste domenii,
                                promovarea tineretului şi dezvoltarea societăţii civile
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                Si cum de multe ori activitătile promovate de asociatia noastră
                                    nu sunt decât pretexte de a evada în natură,
                                    fie pentru a o explora din interiorul ei,
                                    fie doar pentru a o privi în timp ce rulăm pe sosea,
                                    ne-am propus ca motto-ul asociatiei să fie „Ne place verde!„
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                Am dori să credem că prin activitatea asociatiei, acest motto se va întipări pe buzele
                                    si în sufletul tuturor celor care vor dori să ni se alăture ca membri
                                    sau ca mod de a rationa, pentru ca în final să devină un stil de viată.
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );
};
