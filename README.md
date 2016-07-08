# ng2-mqtt
Angular2 port of the mqttws31 library
MQTT for Angular2
=================

## Installing via NPM
```
npm install ng2-mqtt
```

## Using ng2-mqtt

### Implement in a component or controller
```
import {Paho} from 'mqttws31';

export class MyComponent implements OnInit {
  private _client: Paho.MQTT.Client;
  
  public constructor() {
    this._client = new Paho.MQTT.Client("host", 80, "path", "clientId");
    
    this._client.onConnectionLost = (responseObject: Object) => {
      console.log('Connection lost.');
    };
    
    this._client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log('Message arrived.');
    };
    
    this._client.connect({ onSuccess: this.onConnected.bind(this); });
  }
  
  private onConnected():void {
    console.log('Connected to broker.');
  }
}
```

Depends on the library from:
https://eclipse.org/paho/clients/js/
