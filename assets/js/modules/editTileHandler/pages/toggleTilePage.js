const toggleTilePage = `
<div class="form_item">
  <h3 class="form_title">Basic details</h3>
  <div class="form_field">
    <input
      type="text"
      name="title"
      id="title"
      placeholder="Visible in dashboard"
    />
    <label for="title">Title</label>
  </div>
  <div class="form_field">
    <input
      type="text"
      name="pub_topic"
      id="pub_topic"
      placeholder="Broker topic for publishing"
    />
    <label for="pub_topic">Publish topic</label>
  </div>
  <div class="form_field">
    <input
      type="text"
      name="sub_topic"
      id="sub_topic"
      placeholder="Broker topic to subscribe"
    />
    <label for="sub_topic">Subscribe topic</label>
  </div>
</div>
<div class="form_item">
  <h3 class="form_title">Additional</h3>
  <div class="form_field--checkbox">
    <label for="retained">Retained</label>
    <input
      type="checkbox"
      name="retained"
      id="retained"
      placeholder="0 or 1 or 2 Only"
    />
  </div>
  <div class="form_field">
    <input
      type="text"
      name="qos"
      id="qos"
      placeholder="0 or 1 or 2 Only"
    />
    <label for="qos">QoS (Optional)</label>
  </div>
</div>
<div class="form_item">
  <h3 class="form_title">States</h3>
  <div class="form_field">
    <input
      type="text"
      name="on_value"
      id="on_value"
      placeholder="On value to be sent"
    />
    <label for="on_value">On value</label>
  </div>
  <div class="form_field">
    <input
      type="text"
      name="off_value"
      id="off_value"
      placeholder="Off value to be sent"
    />
    <label for="off_value">Off value</label>
  </div>
</div>
<div class="form_msg"></div>
<div class="form_btn-area">
  <input type="button" class="btn btn--success tile_save_btn" value="Save" />
</div>
`;

export default toggleTilePage;
