import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'


export default class MenuLateral extends Component {
    render() {
        return (            
            <aside class="main-sidebar sidebar-wrapper">
            <section class="sidebar">
              <div class="user-panel ">
                <div class="pull-right">
                  <label>Olá Usuário</label>
                </div>
              </div>
              <ul class="sidebar-menu" data-widget="tree">
                <li class="header">MENU PRINCIPAL</li>
                <li class="treeview">
                  <a href="#">
                    <i class="far fa-list-alt"></i><span> Meu Time</span>
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul class="treeview-menu">
                    <li><a href="pages/UI/general.html"><i class="fas fa-users"></i> Ver Time</a></li>
                    <li><a href="pages/UI/icons.html"><i class="fa fa-user-plus"></i> Adicionar</a></li>
                    <li><a href="pages/UI/buttons.html"><i class="fas fa-chart-bar"></i> Estatísticas</a></li>
                  </ul>
                </li>
                <li class="treeview">
                  <a href="#">
                    <i class="fa fa-user-plus"></i> <span>Try Out</span>
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul class="treeview-menu">
                    <li><a href="pages/forms/general.html"><i class="fa fa-walking"></i> 40 Jardas</a></li>
                    <li><a href="pages/forms/advanced.html"><i class="fa fa-level-up-alt"></i> Impulsão</a></li>
                    <li><a href="pages/forms/editors.html"><i class="fas fa-dumbbell"></i> Força</a></li>
                  </ul>
                </li>
                
              </ul>
            </section>
            
          </aside>
        )
    }

}