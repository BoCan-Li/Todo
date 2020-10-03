import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import routerList from './router.config'

export default function MyRouter (){
    return(
        <Router>
            <Switch>
                <Route exact path="/todo" render={()=><Redirect to={'/todo/list'}/>} />
                {
                    routerList.map(list=>{
                        const {path, component, exact=false} = list;
                        if(exact){
                            return <Route key={path} exact path={path} component={component} />
                        }
                        return <Route 
                                    path={path} 
                                    key={path}
                                    render={props=>(
                                        <list.component {...props} routes={list.routes} />
                                    )}
                                />
                    })
                }
            </Switch>
        </Router>
    )
}
