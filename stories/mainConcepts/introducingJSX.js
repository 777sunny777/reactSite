import React from 'react';
import PropTypes from 'prop-types';
import FullWidthGrid from '../common/fullWidthGrid.js';
import { Typography, Link, Alert } from '@material-ui/core';

const IntroducingJSX = () => {
  return (
    <FullWidthGrid>
        <Typography variant="h4" component="h4" align="left">
            Introducing JSX (20210128)
        </Typography>
        <Alert severity="info">
            Links: <Link target="__blank" href="https://reactjs.org/docs/introducing-jsx.html">Introducing JSX</Link>
        </Alert> 
        <Typography variant="body2" component="p" align="left">
            这篇文章其实介绍的很基本，后面还有一篇《JSX In Depth》会有些深入的思考。
        </Typography>
        <Alert severity="info">
            <pre><code>
                const element = &lt;h1&gt; Hello, world! &lt;/h1&gt;;
            </code></pre>
        </Alert>       
        <Typography variant="body2" component="p" align="left">
            这个语法的有趣之处在于它既不是string，也不是html。它是jsx，是js语法的扩展。react官方推荐用它来描绘UI。
            这种方式很容易让你想到template，像是jsp，nunjucks等模板语言，不过不同的是，jsx完全是js的语法糖。
        </Typography>

        <Typography variant="body2" component="p" align="left">

        </Typography>      
        <Typography variant="h6" component="h6" align="left">
            
        </Typography>  
         <Typography variant="body2" component="p" align="left">

        </Typography>      
        <Typography variant="h6" component="h6" align="left">
            
        </Typography>  



        <Typography variant="body2" component="p" align="left">

        </Typography>      
        <Typography variant="h6" component="h6" align="left">
            
        </Typography>         
        <Typography variant="body2" component="p" align="left">

        </Typography>      
        <Typography variant="h6" component="h6" align="left">
            
        </Typography>  



        <Typography variant="body2" component="p" align="left">

        </Typography>      
        <Typography variant="h6" component="h6" align="left">
            
        </Typography>  


       
    </FullWidthGrid>
  )
}

export default IntroducingJSX;