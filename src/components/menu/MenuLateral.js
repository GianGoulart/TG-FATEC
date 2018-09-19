import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'


export default class MenuLateral extends Component {
    render() {
        return (            
            <aside className="main-sidebar sidebar-wrapper">
            <section className="sidebar">
              <div className="user-panel ">
                <div className="pull-right">
                  <label>Olá Usuário</label>
                </div>
              </div>
              <ul className="sidebar-menu" data-widget="tree">
                <li className="header">MENU PRINCIPAL</li>
                <li className="treeview">
                  <a href="#">
                    <i className="far fa-list-alt"></i><span> Meu Time</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="pages/UI/general.html"><i className="fas fa-users"></i> Ver Time</a></li>
                    <li><a href="pages/UI/icons.html"><i className="fa fa-user-plus"></i> Adicionar</a></li>
                    <li><a href="pages/UI/buttons.html"><i className="fas fa-chart-bar"></i> Estatísticas</a></li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-user-plus"></i> <span>Try Out</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="pages/forms/general.html"><i className="fa fa-walking"></i> 40 Jardas</a></li>
                    <li><a href="pages/forms/advanced.html"><i className="fa fa-level-up-alt"></i> Impulsão</a></li>
                    <li><a href="pages/forms/editors.html"><i className="fas fa-dumbbell"></i> Força</a></li>
                  </ul>
                </li>
                
              </ul>
            </section>
            
          </aside>
        )
    }

}