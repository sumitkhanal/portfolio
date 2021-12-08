import React from 'react'
import classes from "./About.module.css";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export default function About() {
  const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(()=>{
        console.log("usse effect hook, inView=", inView);
        if(inView){
            animation.start({
                x:0,
                transition:{
                    type:'spring',duration:1.5, bounce:0
                }
            });
        }
        if(!inView){
            animation.start({
                x:'-100vw'
            })
        }
    },[inView]);
  return (
    <div ref={ref}>
      <div className={classes.About}>
        <motion.div className={classes.Container}
        initial={{x:"-100vw"}}
        animate={animation}>
                <h1>ABOUT<br/>ME</h1>
        </motion.div>
        </div>
        </div>
  )
}
