import React, { Component } from "react";
import { Container, Header, Content, Button } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity , 
  Alert , 
  Modal
} from "react-native";
export default class Language extends Component {


  onPress = () => {
    Alert.alert('Modal has been closed.');
  }

  render() {
    return (
      <Container>
        <ImageBackground
          source={require("../images/bg_lang.jpg")}
          style={{ width: "100%", height: "100%", flexDirection: "column" }}
        >
          <Grid
            style={{
              flex: 1
            }}
          >
            <Row
              style={{
                flex: 0.7,
                justifyContent: "center"
              }}
            >
              <View style={styles.imageView}>
                <Image
                  style={styles.image}
                  source={require("../images/logo.png")}
                />
              </View>
            </Row>
            <Row
              style={{
                flex: 1,
                alignItems: "flex-end",
                marginBottom: 15
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  width: "50%",
                  height: "15%"
                }}
              >
                <Content>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "center"
                    }}
                  >
                    <TouchableOpacity style={styles.button}  onPress={this.onPress}>
                      <Button transparent>
                        <Text style={styles.english}>ENGLISH</Text>
                      </Button>
                    </TouchableOpacity>
                  </View>
                </Content>

                <View style={{ backgroundColor: "#f1b104", width: 1 }}>
                  {/* here i will add the | char */}
                  <Content>
                    <Text> </Text>
                  </Content>
                </View>

                <Content>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "center"
                    }}
                  >
                    <Button transparent>
                      <Text style={styles.english}> العربية</Text>
                    </Button>
                  </View>
                </Content>
              </View>
            </Row>
          </Grid>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    width: 5,
    height: 200
  },
  imageView: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  image: {
    width: 180,
    height: 80
  },
  english: {
    color: "#f1b104",
    fontSize: 20,
    alignItems: "flex-end",
    height: "100%"
  },
  lang: {
    justifyContent: "center"
  }, 
  button : {
    // alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    // padding: 10
  }
});
