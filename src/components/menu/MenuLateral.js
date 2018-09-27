import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import MenuContent from './MenuContent';


export default class MenuLateral extends Component {
    render() {
        return (       
          <div>
            <div id="wrapper" className="wrapper mt-6">
                {/* SIDEBAR WRAPPER */}
                <nav id="sidebar-wrapper" className="active">
                  <ul className="sidebar-menu tree" data-widget="tree">
                    <li className=" header nav-item mb-1">
                        <div className="saudacao">
                            <span className="nav-link text-capitalize">
                                Olá, <span className="text-capitalize"> Usuario! </span>
                            </span>
                        </div>
                    </li>
                    <hr />
                    <li className="treeview">
                      <a href="#">
                        <i className="far fa-list-alt"></i><span> Meu Time  </span>
                        <span className="float-right">
                          <i className="fa fa-angle-left pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li><a href="/myTeam/myTeam"><i className="fas fa-users"></i> Ver Time</a></li>
                        <li><a href="/myTeam/new"><i className="fa fa-user-plus"></i> Adicionar</a></li>
                        <li><a href="/myTeam/statistics"><i className="fas fa-chart-bar"></i> Estatísticas</a></li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="fa fa-user-plus"></i> <span>Try Out  </span>
                        <span className="float-right">
                          <i className="fa fa-angle-left pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li><a href="/tryOut/novoCandidato"><i className="fa fa-walking"></i> Cadastrar Candidato</a></li>
                        <li><a href="/tryOut/novoAvaliacao"><i className="fa fa-level-up-alt"></i> Cadastrar Avaliação</a></li>
                      </ul>
                    </li>
                  </ul>

                </nav>
                {/* FIM SIDEBAR WRAPPER */}
                {/* PAGE CONTENT WRAPPER */}
                <MenuContent {...this.props} />
                {/* FIM PAGE CONTENT WRAPPER */}
            </div>
          </div>
        )
    }

}