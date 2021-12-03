use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log;
use base64::{decode, encode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;

#[wasm_bindgen]
pub fn gray_scale(encoded_file: &str) -> String {
    log(&"rust say hello in grayscale function".into());

    let base64_to_vector = decode(encoded_file).unwrap();
    log(&"img decode".into());
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    log(&"converted in to img".into());

    img = img.grayscale();
    log(&"img scaled into gray".into());

    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    log(&"new image".into());

    let encoded_img = encode(&buffer);
    let data_url = format!(
        "data:image/png;base64,{}",
        encoded_img
    );

    data_url

}

