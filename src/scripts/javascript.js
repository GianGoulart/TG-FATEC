import $ from 'jquery';
import _config from '../../src/config';

export function toogleMenuScript() {
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $("#wrapper").toggleClass("toggled");
            $('.hamburguer').toggleClass('active');
        });
    });
}

export function getCookie() {
    let _cookie = undefined;
    if (localStorage.getItem(_config.config.COOKIE_NAME)) {
        _cookie = JSON.parse(localStorage.getItem(_config.config.COOKIE_NAME));
    }
    if (sessionStorage.getItem(_config.config.COOKIE_NAME)) {
        _cookie = JSON.parse(sessionStorage.getItem(_config.config.COOKIE_NAME));
    }

    return _cookie;
}

export function removeCookie() {
    localStorage.removeItem(_config.config.COOKIE_NAME);
    sessionStorage.removeItem(_config.config.COOKIE_NAME);
}

export function verificarAutenticacao(_this) {
    let _cookie = getCookie();
    let currentDate = new Date().getTime();
    let login = 'Sua sessão expirou. Faça o login novamente.';

    if (_cookie && _cookie.expirar <= currentDate) {
        removeCookie();
        _this.context.store.dispatch({ type: 'LOGIN/IN', login });
        _this.props.history.push('/');
    } else if (!_cookie) {
        _this.context.store.dispatch({ type: 'LOGIN/IN', login });
        _this.props.history.push('/');
    }
}

export function selectAllCheckbox() {
    $(document).ready(function () {
        $('#selectAll').on('click', function (e) {
            var table = $(e.target).closest('table');
            $('td input:checkbox', table).prop('checked', this.checked);
        });
    });
}

export function unselectAllCheckbox() {
    $(document).ready(function () {
        $('table input[type="checkbox"]:checked').each(function () {
            $('table input:checkbox').prop('checked', false);
        });
    });
}

export function listAllSelected() {
    var selected = [];
    $('td input[type="checkbox"]:checked').each(function () {
        selected.push($(this).attr('id'));
    });
    return selected;

}