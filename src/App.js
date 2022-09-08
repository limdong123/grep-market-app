import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';
import MainComponet from './main/index';
import { Switch, Route, Link, useHistory } from "react-router-dom"
import Uploadpage from './upload';
import ProductPage from './product';
import { Button } from "antd";
import { DownloadOutlined } from '@ant-design/icons'

function App() {

  const history = useHistory()
  const clickUpload = () => {
    history.push("/upload")
  }

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to={"/"}>
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size='large'
            onClick={() => {
              clickUpload()
            }}
            icon={<DownloadOutlined />}>
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainComponet />
          </Route>
          <Route exact={true} path="/product/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <Uploadpage />
          </Route>

        </Switch>
      </div>
      <div id="footer"></div>

    </div>

  );
}

export default App;
