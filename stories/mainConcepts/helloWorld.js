import React from 'react';
import PropTypes from 'prop-types';
import FullWidthGrid from '../common/fullWidthGrid.js';
import { Typography, Link, Alert } from '@material-ui/core';

const HelloWorld = () => {
  return (
    <FullWidthGrid>
        <Typography variant="h4" component="h4" align="left">
            Hello World (20210128)
        </Typography>
        <Alert severity="info">
            Links: <Link target="__blank" href="https://reactjs.org/docs/hello-world.html">Hello World</Link>
        </Alert> 
        <Typography variant="body2" component="p" align="left">
            今天是正式开始react site翻译的第一天，计划用1年时间翻译完成。翻译不会是完全的英文变中文的文字翻译，
            其中一定也会涉及到英文，还有结合自己多年的实战经验，还会多一些实例进行翻译，目的也是为了巩固自己对于react
            的理解。这里的每篇文章都会链到我的个人blog上面去<Link href="http://777sunny777.github.io/sunnyblog/" target="__blank">sunnyblog</Link>。
            也欢迎有缘的朋友邮件和我交流。
        </Typography>      
        <Typography variant="h6" component="h6" align="left">
            Knowledge Level Assumptions(react学习前的基本要求)
        </Typography>  
        <Typography variant="body2" component="p" align="left">
            React是一个js库，所以需要有基本的js知识储备，下面这个站点是可以用来自测你的js基本知识水平，
            整个文章看完可能需要你1个半小时。<Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">
            A re-introduction to JavaScript (JS tutorial)</Link>。后面看情况，我会具体总结一下这篇文章。
        </Typography> 




       
    </FullWidthGrid>
  )
}

export default HelloWorld;