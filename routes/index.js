var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var StaticRouter = require('react-router-dom').StaticRouter;
var Redux = require('redux');
var Provider = require('react-redux').Provider;
var App = require('../src/components/App/App.js').default;
var ServerStyleSheet = require('styled-components').ServerStyleSheet;

function reducer(state) { return state; }

router.get('*', function(request, response) {
    var initialState = { title: 'Universal React' };
    var store = Redux.createStore(reducer, initialState);
    
    const sheet = new ServerStyleSheet();

    var context = {};
    var html = ReactDOMServer.renderToString(
        sheet.collectStyles(
            <Provider store={store}>
                <StaticRouter location={request.url} context={context}>
                    <App/>
                </StaticRouter>
            </Provider>
            )
    );
    const styles = sheet.getStyleTags(); 
    html = html.replace('</head>',`${styles}</head>`)

    if (context.status >= 400) {
        response.status(context.status).send(html);
    } else if (context.url) {
        response.redirect(context.status, context.url);
    } else {
        response.send(html);
    }
});

module.exports = router;