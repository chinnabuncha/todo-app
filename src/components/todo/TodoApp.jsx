import React, { Component } from 'react'
import FirstComponent from '../learning-examples/FirstComponent'
import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom'


class TodoApp extends Component {
   
    render() {
        return (
            <div className="TodoApp">

                <Router>
                    <>
                        <Switch>
                            <Route path ="/" exact component ={LoginComponent}/>
                            <Route path="/login" component ={LoginComponent} ></Route>
                            <Route path="/welcome/:name" component ={WelcomeComponet} ></Route>
                            <Route path="/todos" component ={ListTodosComponet} ></Route>
                            <Route component ={ErrorComponet}/>
                        </Switch>
                    </>
                </Router>
               
              {/* <LoginComponent></LoginComponent>  */}
                {/* <Weclome></Weclome> */}
       
            </div>
            
        )
    }
}
class ListTodosComponet extends Component {
    constructor(props){
        super(props)
            this.state={
                todos :[
                
                    { id :1, description : 'Learn React',done:false,targetDate:new Date()},
                    { id :2, description : 'Become and expert at react',done:false,targetDate:new Date ()},
                    { id :3, description : 'Vist India',done:false,targetDate:new Date ()}
                ]  
            }
    }
    render(){
    return (
            <div> 
                <h1>List Todo</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>targetDate</th>
                            <th>Is complete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //map each todo in jsx
                            this.state.todos.map (
                                todo =>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )
                        }
                        {/* <tr>
                            <td>{this.state.todo.id}</td>
                            <td>{this.state.todo.description}</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        )
                    }
}
class WelcomeComponet extends Component {
    render(){
    return <div> Welcome {this.props.match.params.name} You can manage your  todos <Link to ="/todos">here</Link>.
    </div>
    }
}

function ErrorComponet(){
    return <div> An Error Occured.I don't knoe what to do! Contact support at abcd-efg</div>
}
class LoginComponent extends Component {
    constructor(props){
    super(props)
    this.state ={
            username : 'test',
            password : '',
            hasLoginFailed:false,
            showSuccessMessage:false
        }
        // this.handleUsernameChange=this.handleUsernameChange.bind(this);
        // this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleChange=this.handleChange.bind(this)
        this.Loingclicked=this.Loingclicked.bind(this)
    }

    handleChange(event){
        //console.log(this.state);
        this.setState(
            {
               [event.target.name]
                :event.target.value
        }
        )
    }

    // handleUsernameChange(event){
    //     console.log(event.target.name);
    //     this.setState(
    //         {
    //            [event.target.name]
    //             :event.target.value
    //     }
    //     )
    // }
    // handlePasswordChange(event){
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }
    Loingclicked(){

        //เช็ค usernamecแลพ password
        if(this.state.username === 'test' && this.state.password ==='password'){
            this.props.history.push(`/welcome/${this.state.username} `)
            // console.log('เรียบร้อย')
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFailed:false})
        }
        else{
            console.log('ผิดพลาด')
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
        //console.log('failed')
        //console.log(this.state)
    }

    render(){
        return(
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed ={ this.state.hasLoginFailed}/> */}
                {this.state.hasLoginFailed && <div>invalid Credentials</div>}
                {/*<ShowLoginSuccessMessage showSuccessMessage = {this.state.showSuccessMessage}/>*/}
                {this.state.showSuccessMessage && <div>Login Sucessful</div>}
             
           Username<input type="text" name="username" value ={this.state.username} onChange={this.handleChange}/>
           Password<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />    
           <button onClick ={this.Loingclicked}>Loing</button>

         
           </div>
            )
    }
}
// function ShowInvalidCredentials(props){
//         if(props.hasLoginFailed){
//             return <div>invalid Credentials</div>
//         }
//         return null
// }
// function ShowLoginSuccessMessage(props){
//     if(props.showSuccessMessage){
//         return <div>Login Sucessful</div>
//     }
//     return null
// }
export default TodoApp
