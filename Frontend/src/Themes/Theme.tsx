import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
    palette:{
        primary:{
            main:"#D9D9D9",//grey
            light:"#749BC2",//blue
            dark:"#000000" //black
        },
        secondary:{
            main:"#386A71",//green
            light:"#A3A629",//gold
            dark:"#F5F5F5"//white
        }
    },
    components:{
        MuiButton:{
            styleOverrides:{
                outlinedPrimary:{
                    borderRadius:"10px",
                   
                }
            },
            defaultProps:{
        size:"medium"
     },
    
     //variants:[
// {
//     props:{variant:'square'},style:{
//         borderRadius:10
//     }
// }
//      ]
        },
        MuiTextField:{
        styleOverrides:{
            root:{
                border:"1px solid white",
                 ".css-s2pjuh-MuiFormLabel-root-MuiInputLabel-root":{
                    color:"black"
                 },
                 ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":{
                    color:"black",
                 }
            }
        }
        },
      MuiSelect:{
        styleOverrides:{
            root:{
                 border:"1px solid white",
                 ".css-1d3ddih-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select":{
                    backgroundColor:"#F1BDB0",
                    // borderColor:"black"
                 },
                 ".css-dfscwy-MuiFormLabel-root-MuiInputLabel-root":{
                    color:"white"
                 }
            }
        }
      },
      MuiCard:{
        styleOverrides:{
            root:{
                borderRadius:"13px"
            }
        }
      }
    },
    
    typography:{
        fontFamily:"montserrat",
        h1:{
            color:"#FFFFFF"
        },
         h2:{
            color:"#FFFFFF"
        },
         h3:{
            color:"#FFFFFF"
        },
         h4:{
            color:"#FFFFFF"
        },
         h5:{
            color:"#FFFFFF"
        },
        h6:{
            color:"#FFFFFF"
        },
       
        subtitle1:{
            fontSize:14
        },
        body1:{
            fontSize:12    //h1,h2,h3,h4,h5,h6,subtitle1,subtitle2,body1,body2,button,caption,overline
        }
    }
     
});

export default responsiveFontSizes(theme);