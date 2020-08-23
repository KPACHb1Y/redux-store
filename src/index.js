import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

import App from "./components/app/app";
import ErrorBoundary from "./components/error-boundry/error-boundry";
import BookstoreService from "./services/bookstore-service";
import {BookstoreServiceProvider} from "./components/bookstor-service-context/bookstore-service-context";

import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
)
