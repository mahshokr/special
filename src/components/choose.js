import React, { Component } from "react";
import { Container, Header, Content , Button } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
 // Button
} from "react-native";
export default class Choose extends Component {
  render() {
    return (
      <Container>
        <ImageBackground
          source={require("../images/bg_choose.jpg")}
          style={{ width: "100%", height: "100%", flexDirection: "column" }}
        >
          <Grid
            style={{
              flex: 1
            }}
          >
            <Row
              style={{
                flex: 0.8,
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
                justifyContent: "center"
              }}
            >
              <View style={styles.imageView2}>
                <Image
                  style={styles.image2}
                  source={require("../images/deserve.png")}
                />
              </View>
            </Row>
            <Row style={{ flex: 1, justifyContent: "center" }}>
              <View>
                {/* <Button title="تسجيل الدخول " style />

                <Button title="إنشاء حساب جديد" />

                <Button title="تسجيل صالون" /> */}
                <Content>
                  <Button rounded bordered light transparent>
                    <Text style = {{width : 150 }}>تسجيل الدخول</Text>
                  </Button>
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
    width: 130,
    height: 60
  },
  imageView2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  image2: {
    width: 132,
    height: 87
  }
});
