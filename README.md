# ammazza-webar

![Alt-Text](https://ps.w.org/ammazza-webar/assets/banner-772%C3%97250.jpg?rev=2585959)


AMMAZZA is an out-of-box multi-utility product in the market of jewellery with the fusion of AR (Augmented Reality) + AI (Artificial Intelligence) + BI (Business Intelligence).

By integrating Virtual Try-On feature, customers can try jewellery from anywhere anytime.

Virtual Try-On is available for Facial and Hand jewelleries like Earrings, Necklace, Sets, Rings, Bracelets.





## Installation

```sh
npm install ammazza-webar
```

## Usage

```js
import { LiveTryon } from "ammazza-webar";

// ...

 <LiveTryon ref={instance => { this.state.child = instance; }}></LiveTryon>


  <Button
        title="Open tryon"
        onPress={() => this.state.child.openModelForproduct(ProductId, clientId)}
      />
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

Weboccult
