import React, { Component } from 'react'
import Classtest from './Classtest'
import {img01, img02, img03} from "./img";


export default class Classtestapp extends Component {
    constructor(props){

        super(props)
            this.state = {
                scissors : {
                    name : "가위",
                    img : img01
                },
                rock:{
                    name : "바위",
                    img : img02
                },
                paper:{
                    name: "보",
                    img : img03
                }
            }
    }
  render() {



    return (
      <div></div>
    )
  }
}
