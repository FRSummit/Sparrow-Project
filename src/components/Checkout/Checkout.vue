<template>
  <!-- Main Container -->
  <section class="main-container col2-right-layout bounceInUp animated">
    <div class="main container">
      <div class="row">
        <div class="col-main col-sm-9">
          <div class="page-title">
            <h1>Checkout</h1>
          </div>
          <ol class="one-page-checkout" id="checkoutSteps">
            <li id="opc-billing" class="section allow active">
              <div class="step-title">
                <span class="number">1</span>
                <h3>Checkout Method</h3>
                <!--<a href="#">Edit</a> -->
              </div>
              <div id="checkout-step-billing" class="step a-item">
                <form id="co-billing-form">
                  <fieldset class="group-select">
                    <ul>
                      <li>
                        <label
                          for="billing-address-select"
                        >Select a billing address from your address book or enter a new address.</label>
                        <br />
                        <select
                          name
                          id="billing-address-select"
                          class="address-select"
                          title
                          onchange="#"
                        >
                          <option
                            value="1"
                            selected="selected"
                          >pranali d, aundh, tyyrt, Alabama 46532, United States</option>
                          <option>New Address</option>
                        </select>
                      </li>
                      <li id="billing-new-address-form" style="display: none;">
                        <fieldset>
                          <legend>New Address</legend>
                          <input type="hidden" name value="4269" id="billing:address_id" />
                          <ul>
                            <li>
                              <div class="customer-name">
                                <div class="input-box name-firstname">
                                  <label for="billing:firstname">
                                    First Name
                                    <span class="required">*</span>
                                  </label>
                                  <br />
                                  <input
                                    type="text"
                                    id="billing:firstname"
                                    name
                                    value="pranali"
                                    title="First Name"
                                    class="input-text"
                                  />
                                </div>
                                <div class="input-box name-lastname">
                                  <label for="billing:lastname">
                                    Last Name
                                    <span class="required">*</span>
                                  </label>
                                  <br />
                                  <input
                                    type="text"
                                    id="billing:lastname"
                                    name
                                    value="d"
                                    title="Last Name"
                                    class="input-text"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="input-box">
                                <label for="billing:company">Company</label>
                                <br />
                                <input
                                  type="text"
                                  id="billing:company"
                                  name
                                  title="Company"
                                  class="input-text"
                                />
                              </div>
                            </li>
                            <li>
                              <label>
                                Address
                                <span class="required">*</span>
                              </label>
                              <br />
                              <input
                                type="text"
                                title="Street Address"
                                name
                                value="aundh"
                                class="input-text"
                              />
                            </li>
                            <li>
                              <input type="text" title="Street Address 2" name class="input-text" />
                            </li>
                            <li>
                              <div class="input-box">
                                <label for="billing:city">
                                  City
                                  <span class="required">*</span>
                                </label>
                                <br />
                                <input
                                  type="text"
                                  title="City"
                                  name
                                  value="tyyrt"
                                  class="input-text"
                                  id="billing:city"
                                />
                              </div>
                              <div class="input-box">
                                <label for="billing:region">
                                  State/Province
                                  <span class="required">*</span>
                                </label>
                                <br />
                                <select
                                  id="billing:region_id"
                                  name="billing[region_id]"
                                  title="State/Province"
                                  class="validate-select"
                                >
                                  <option>Please select region, state or province</option>
                                  <option value="1">Alabama</option>
                                  <option value="2">Alaska</option>
                                  <option value="3">American Samoa</option>
                                  <option value="4">Arizona</option>
                                </select>
                                <input
                                  type="text"
                                  id="billing:region"
                                  name
                                  value="Alabama"
                                  title="State/Province"
                                  class="input-text"
                                  style="display: none;"
                                />
                              </div>
                            </li>
                            <li>
                              <div class="input-box">
                                <label for="billing:postcode">
                                  Zip/Postal Code
                                  <span class="required">*</span>
                                </label>
                                <br />
                                <input
                                  type="text"
                                  title="Zip/Postal Code"
                                  name
                                  id="billing:postcode"
                                  value="46532"
                                  class="input-text validate-zip-international"
                                />
                              </div>
                              <div class="input-box">
                                <label for="billing:country_id">
                                  Country
                                  <span class="required">*</span>
                                </label>
                                <br />
                                <select
                                  name="billing[country_id]"
                                  id="billing:country_id"
                                  class="validate-select"
                                  title="Country"
                                >
                                  <option></option>
                                  <option value="AF">Afghanistan</option>
                                  <option value="AL">Albania</option>
                                  <option value="DZ">Algeria</option>
                                  <option value="AS">American Samoa</option>
                                  <option value="AD">Andorra</option>
                                </select>
                              </div>
                            </li>
                            <li>
                              <div class="input-box">
                                <label for="billing:telephone">
                                  Telephone
                                  <span class="required">*</span>
                                </label>
                                <br />
                                <input
                                  type="text"
                                  name
                                  value="454541"
                                  title="Telephone"
                                  class="input-text"
                                  id="billing:telephone"
                                />
                              </div>
                              <div class="input-box">
                                <label for="billing:fax">Fax</label>
                                <br />
                                <input
                                  type="text"
                                  name
                                  title="Fax"
                                  class="input-text"
                                  id="billing:fax"
                                />
                              </div>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                name
                                value="1"
                                title="Save in address book"
                                id="billing:save_in_address_book"
                                onchange="#;"
                                class="checkbox"
                              />
                              <label for="billing:save_in_address_book">Save in address book</label>
                            </li>
                          </ul>
                        </fieldset>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name
                          id="billing:use_for_shipping_yes"
                          value="1"
                          class="radio"
                        />
                        <label for="billing:use_for_shipping_yes">Ship to this address</label>
                        <input
                          type="radio"
                          name
                          id="billing:use_for_shipping_no"
                          value="0"
                          checked="checked"
                          class="radio"
                        />
                        <label for="billing:use_for_shipping_no">Ship to different address</label>
                      </li>
                    </ul>
                    <p class="require">
                      <em class="required">*</em>Required Fields
                    </p>
                    <button type="button" class="button continue">
                      <span>Continue</span>
                    </button>
                  </fieldset>
                </form>
              </div>
            </li>
            <li id="opc-shipping" class="section">
              <div class="step-title">
                <span class="number">2</span>
                <h3 class="one_page_heading">Shipping Information</h3>
                <!--<a href="#">Edit</a>-->
              </div>
              <div id="checkout-step-shipping" class="step a-item" style="display: none;">
                <form id="co-shipping-form">
                  <fieldset class="group-select">
                    <ul>
                      <li>
                        <label
                          for="shipping-address-select"
                        >Select a shipping address from your address book or enter a new address.</label>
                        <br />
                        <select
                          name
                          id="shipping-address-select"
                          class="address-select"
                          title
                          onchange="#"
                        >
                          <option
                            value="1"
                            selected="selected"
                          >Sarsha Smith, Main Rd, tyyrt, Alabama 46532, United States</option>
                          <option>New Address</option>
                        </select>
                      </li>
                      <li id="shipping-new-address-form" style="display: none;">
                        <fieldset>
                          <input type="hidden" name id="shipping:address_id" />
                          <ul>
                            <li>
                              <div class="customer-name">
                                <div class="input-box name-firstname">
                                  <label for="shipping:firstname">
                                    First Name
                                    <span class="required">*</span>
                                  </label>
                                  <br />
                                  <input
                                    type="text"
                                    id="shipping:firstname"
                                    name
                                    title="First Name"
                                    class="input-text"
                                    onchange="#"
                                  />
                                </div>
                                <div class="input-box name-lastname">
                                  <label for="shipping:lastname">
                                    Last Name
                                    <span class="required">*</span>
                                  </label>
                                  <br />
                                  <input
                                    type="text"
                                    id="shipping:lastname"
                                    name
                                    title="Last Name"
                                    class="input-text"
                                    onchange="#"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="input-box">
                                <label for="shipping:company">Company</label>
                                <br />
                                <input
                                  type="text"
                                  id="shipping:company"
                                  name
                                  title="Company"
                                  class="input-text"
                                  onchange="#;"
                                />
                              </div>
                            </li>
                            <li>
                              <label for="shipping:street1">
                                Address
                                <span class="required">*</span>
                              </label>
                              <br />
                              <input
                                type="text"
                                title="Street Address"
                                name
                                id="shipping:street1"
                                class="input-text"
                                onchange="#;"
                              />
                            </li>
                            <li>
                              <input
                                type="text"
                                title="Street Address 2"
                                name
                                id="shipping:street2"
                                class="input-text"
                                onchange="#;"
                              />
                            </li>
                            <li>
                              <div class="input-box">
                                <label for="shipping:city">
                                  City
                                  <span class="required">*</span>
                                </label>
                                <br />
                                <input
                                  type="text"
                                  title="City"
                                  name
                                  class="input-text"
                                  id="shipping:city"
                                  onchange="#;"
                                />
                              </div>
                              <div class="input-box">
                                <label for="shipping:region">
                                  State/Province
                                  <span class="required">*</span>
                                </label>
                                <br />
                                <select
                                  id="shipping:region_id"
                                  name
                                  title="State/Province"
                                  class="validate-select"
                                >
                                  <option>Please select region, state or province</option>
                                  <option value="1">Alabama</option>
                                  <option value="2">Alaska</option>
                                  <option value="3">American Samoa</option>
                                </select>
                                <input
                                  type="text"
                                  id="shipping:region"
                                  name
                                  title="State/Province"
                                  class="input-text"
                                  style="display: none;"
                                />
                              </div>
                            </li>
                            <li>
                              <div class="input-box">
                                <label for="shipping:postcode">
                                  Zip/Postal Code
                                  <span class="required">*</span>
                                </label>
                                <br />
                                <input
                                  type="text"
                                  title="Zip/Postal Code"
                                  name
                                  id="shipping:postcode"
                                  class="input-text validate-zip-international"
                                  onchange="#;"
                                />
                              </div>
                              <div class="input-box">
                                <label for="shipping:country_id">
                                  Country
                                  <span class="required">*</span>
                                </label>
                                <br />
                                <select
                                  name
                                  id="shipping:country_id"
                                  class="validate-select"
                                  title="Country"
                                  onchange="#;"
                                >
                                  <option></option>
                                  <option value="AF">Afghanistan</option>
                                  <option value="AL">Albania</option>
                                  <option value="DZ">Algeria</option>
                                  <option value="AS">American Samoa</option>
                                  <option value="AD">Andorra</option>
                                </select>
                              </div>
                            </li>
                            <li>
                              <div class="input-box">
                                <label for="shipping:telephone">
                                  Telephone
                                  <span class="required">*</span>
                                </label>
                                <br />
                                <input
                                  type="text"
                                  name
                                  title="Telephone"
                                  class="input-text"
                                  id="shipping:telephone"
                                  onchange="#;"
                                />
                              </div>
                              <div class="input-box">
                                <label for="shipping:fax">Fax</label>
                                <br />
                                <input
                                  type="text"
                                  name
                                  title="Fax"
                                  class="input-text"
                                  id="shipping:fax"
                                  onchange="#;"
                                />
                              </div>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                name="shipping[save_in_address_book]"
                                value="1"
                                title="Save in address book"
                                id="shipping:save_in_address_book"
                                onchange="#;"
                                class="checkbox"
                              />
                              <label for="shipping:save_in_address_book">Save in address book</label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                name
                                id="shipping:same_as_billing"
                                value="1"
                                class="checkbox"
                              />
                              <label for="shipping:same_as_billing">Use Billing Address</label>
                            </li>
                          </ul>
                        </fieldset>
                      </li>
                    </ul>
                    <p class="require">
                      <em class="required">*</em>Required Fields
                    </p>
                    <div class="buttons-set1" id="shipping-buttons-container">
                      <button type="button" class="button">
                        <span>Continue</span>
                      </button>
                      <a href="#" class="back-link">« Back</a>
                    </div>
                  </fieldset>
                </form>
              </div>
            </li>
            <li id="opc-shipping_method" class="section">
              <div class="step-title">
                <span class="number">3</span>
                <h3 class="one_page_heading">Shipping Method</h3>
                <!--<a href="#">Edit</a>-->
              </div>
              <div id="checkout-step-shipping_method" class="step a-item" style="display: none;">
                <form id="co-shipping-method-form">
                  <fieldset>
                    <div id="checkout-shipping-method-load">
                      <dl class="shipping-methods">
                        <dt>Flat Rate</dt>
                        <dd>
                          <ul>
                            <li>
                              <input
                                type="radio"
                                name
                                value="flatrate_flatrate"
                                id="s_method_flatrate_flatrate"
                                checked="checked"
                                class="radio"
                              />
                              <label for="s_method_flatrate_flatrate">
                                Fixed
                                <span class="price">$35.00</span>
                              </label>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </div>
                    <div id="onepage-checkout-shipping-method-additional-load">
                      <div class="add-gift-message">
                        <h4>Do you have any gift items in your order?</h4>
                        <p>
                          <input
                            type="checkbox"
                            name
                            id="allow_gift_messages"
                            value="1"
                            class="checkbox"
                          />
                          <label
                            for="allow_gift_messages"
                          >Check this checkbox if you want to add gift messages.</label>
                        </p>
                      </div>
                      <div
                        style="display: none;"
                        class="gift-message-form"
                        id="allow-gift-message-container"
                      >
                        <div class="inner-box"></div>
                      </div>
                    </div>
                    <div class="buttons-set1" id="shipping-method-buttons-container">
                      <button type="button" class="button">
                        <span>Continue</span>
                      </button>
                      <a href="#" class="back-link">« Back</a>
                    </div>
                  </fieldset>
                </form>
              </div>
            </li>
            <li id="opc-payment" class="section">
              <div class="step-title">
                <span class="number">4</span>
                <h3 class="one_page_heading">Payment Information</h3>
                <!--<a href="#">Edit</a>-->
              </div>
              <div id="checkout-step-payment" class="step a-item" style="display: none;">
                <form id="co-payment-form">
                  <dl id="checkout-payment-method-load">
                    <dt>
                      <input
                        type="radio"
                        id="p_method_checkmo"
                        value="checkmo"
                        name
                        title="Check / Money order"
                        class="radio"
                      />
                      <label for="p_method_checkmo">Check / Money order</label>
                    </dt>
                    <dd>
                      <fieldset class="form-list"></fieldset>
                    </dd>
                    <dt>
                      <input
                        type="radio"
                        id="p_method_ccsave"
                        value="ccsave"
                        name
                        title="Credit Card (saved)"
                        class="radio"
                      />
                      <label for="p_method_ccsave">Credit Card (saved)</label>
                    </dt>
                    <dd>
                      <fieldset class="form-list">
                        <ul id="payment_form_ccsave" style="display: none;">
                          <li>
                            <div class="input-box">
                              <label for="ccsave_cc_owner">
                                Name on Card
                                <span class="required">*</span>
                              </label>
                              <br />
                              <input
                                type="text"
                                disabled
                                title="Name on Card"
                                class="input-text"
                                id="ccsave_cc_owner"
                                name
                              />
                            </div>
                          </li>
                          <li>
                            <div class="input-box">
                              <label for="ccsave_cc_type">
                                Credit Card Type
                                <span class="required">*</span>
                              </label>
                              <br />
                              <select
                                disabled
                                id="ccsave_cc_type"
                                name
                                class="required-entry validate-cc-type-select"
                              >
                                <option>--Please Select--</option>
                                <option value="AE">American Express</option>
                                <option value="VI">Visa</option>
                                <option value="MC">MasterCard</option>
                                <option value="DI">Discover</option>
                              </select>
                            </div>
                          </li>
                          <li>
                            <div class="input-box">
                              <label for="ccsave_cc_number">
                                Credit Card Number
                                <span class="required">*</span>
                              </label>
                              <br />
                              <input
                                type="text"
                                disabled
                                id="ccsave_cc_number"
                                name
                                title="Credit Card Number"
                                class="input-text validate-cc-number validate-cc-type"
                              />
                            </div>
                          </li>
                          <li>
                            <div class="input-box">
                              <label for="ccsave_expiration">
                                Expiration Date
                                <span class="required">*</span>
                              </label>
                              <br />
                              <div class="v-fix">
                                <select
                                  disabled
                                  id="ccsave_expiration"
                                  style="width: 140px;"
                                  name
                                  class="required-entry"
                                >
                                  <option selected="selected">Month</option>
                                  <option value="1">01 - January</option>
                                  <option value="2">02 - February</option>
                                  <option value="3">03 - March</option>
                                  <option value="4">04 - April</option>
                                  <option value="5">05 - May</option>
                                  <option value="6">06 - June</option>
                                  <option value="7">07 - July</option>
                                  <option value="8">08 - August</option>
                                  <option value="9">09 - September</option>
                                  <option value="10">10 - October</option>
                                  <option value="11">11 - November</option>
                                  <option value="12">12 - December</option>
                                </select>
                              </div>
                              <div class="v-fix">
                                <select
                                  disabled
                                  id="ccsave_expiration_yr"
                                  style="width: 103px;"
                                  name
                                  class="required-entry"
                                >
                                  <option selected="selected">Year</option>
                                  <option value="2011">2011</option>
                                  <option value="2012">2012</option>
                                  <option value="2013">2013</option>
                                  <option value="2014">2014</option>
                                  <option value="2015">2015</option>
                                  <option value="2016">2016</option>
                                  <option value="2017">2017</option>
                                  <option value="2018">2018</option>
                                  <option value="2019">2019</option>
                                  <option value="2020">2020</option>
                                  <option value="2021">2021</option>
                                </select>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="input-box">
                              <label for="ccsave_cc_cid">
                                Card Verification Number
                                <span class="required">*</span>
                              </label>
                              <br />
                              <div class="v-fix">
                                <input
                                  type="text"
                                  title="Card Verification Number"
                                  class="input-text"
                                  id="ccsave_cc_cid"
                                  name
                                  style="width: 3em;"
                                />
                              </div>
                              <a href="#" class="cvv-what-is-this">What is this?</a>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                    </dd>
                  </dl>
                </form>
                <p class="require">
                  <em class="required">*</em>Required Fields
                </p>
                <div class="buttons-set1" id="payment-buttons-container">
                  <button type="button" class="button">
                    <span>Continue</span>
                  </button>
                  <a href="#" class="back-link">« Back</a>
                </div>
                <div style="clear: both;"></div>
              </div>
            </li>
            <li id="opc-review" class="section">
              <div class="step-title">
                <span class="number">5</span>
                <h3 class="one_page_heading">Order Review</h3>
              </div>
              <div id="checkout-step-review" class="step a-item" style="display: none;">
                <div class="order-review" id="checkout-review-load"></div>
                <div class="buttons-set13" id="review-buttons-container">
                  <p class="f-left">
                    Forgot an Item?
                    <a href="shopping-cart.html">Edit Your Cart</a>
                  </p>
                  <button type="submit" class="button">
                    <span>Place Order</span>
                  </button>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <aside class="col-right sidebar col-sm-3">
          <div class="block block-progress">
            <div class="block-title">Your Checkout</div>
            <div class="block-content">
              <dl>
                <dt class="complete">
                  Billing Address
                  <span class="separator">|</span>
                  <a href="#">Change</a>
                </dt>
                <dd class="complete">
                  <address>
                    John Smith
                    <br />Xyz software co.
                    <br />123 Main Street
                    <br />Windsor
                    <br />Holtsville, New York, 00501
                    <br />United States
                    <br />T: 1234567890
                    <br />F: 123456
                  </address>
                </dd>
                <dt class="complete">
                  Shipping Address
                  <span class="separator">|</span>
                  <a href="#">Change</a>
                </dt>
                <dd class="complete">
                  <address>
                    Saraha Smith
                    <br />ThemesGround Tech Co
                    <br />123 Main Rd,
                    <br />St Town, New York, 00501
                    <br />United States
                    <br />T: 1234567890
                    <br />F: 123456
                  </address>
                </dd>
                <dt class="complete">
                  Shipping Method
                  <span class="separator">|</span>
                  <a href="#">Change</a>
                </dt>
                <dd class="complete">
                  Flat Rate - Fixed
                  <br />
                  <span class="price">$49.00</span>
                </dd>
                <dt>Payment Method</dt>
              </dl>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
  <!-- Main Container End -->
</template>