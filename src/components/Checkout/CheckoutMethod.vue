<template>
  <!-- Main Container -->
  <section class="main-container col2-right-layout">
    <div class="main container">
      <div class="row">
        <div class="col-main col-sm-9">
          <div class="page-title">
            <h1>Checkout</h1>
          </div>
          <ol class="one-page-checkout" id="checkoutSteps">
            <li id="opc-login" class="section allow active">
              <div class="step-title">
                <span class="number">1</span>
                <h3 class="one_page_heading">Checkout Method</h3>
                <!--<a href="#">Edit</a>-->
              </div>
              <div id="checkout-step-login" class="step a-item">
                <div class="col2-set">
                  <div class="col-1">
                    <h2>Checkout as a Guest or Register</h2>
                    <p>Register with us for future convenience:</p>
                    <ul class="form-list">
                      <li class="control">
                        <input type="radio" class="radio" value="guest" id="login:guest" name />
                        <label for="login:guest">Checkout as Guest</label>
                      </li>
                      <li class="control">
                        <input type="radio" class="radio" value="register" id="login:register" name />
                        <label for="login:register">Register</label>
                      </li>
                    </ul>
                    <br />
                    <h4>Register and save time!</h4>
                    <p>Register with us for future convenience:</p>
                    <ul class="ul">
                      <li>Fast and easy check out</li>
                      <li>Easy access to your order history and status</li>
                    </ul>
                    <div class="buttons-set">
                      <p class="required">&nbsp;</p>
                      <button
                        class="button continue"
                        type="button"
                        id="onepage-guest-register-button"
                      >
                        <span>
                          <span>Continue</span>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div class="col-2">
                    <h2>Login</h2>
                    <form method="post" action="#" id="login-form">
                      <fieldset>
                        <h4>Already registered?</h4>
                        <p>Please log in below:</p>
                        <ul class="form-list">
                          <li>
                            <label for="login-email">
                              <em>*</em>Email Address
                            </label>
                            <div class="input-box">
                              <input
                                type="text"
                                name
                                id="login-email"
                                class="input-text validate-email"
                              />
                            </div>
                          </li>
                          <li>
                            <label for="login-password">
                              <em>*</em>Password
                            </label>
                            <div class="input-box">
                              <input type="password" name id="login-password" class="input-text" />
                            </div>
                          </li>
                        </ul>
                        <input type="hidden" value="checkout" name />
                      </fieldset>
                    </form>
                    <div class="buttons-set">
                      <p class="required">* Required Fields</p>
                      <button class="button login" type="submit">
                        <span>
                          <span>Login</span>
                        </span>
                      </button>
                      <a class="f-right" href="#">Forgot your password?</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li id="opc-billing" class="section">
              <div class="step-title">
                <span class="number">2</span>
                <h3 class="one_page_heading">Billing Information</h3>
                <!--<a href="#">Edit</a>-->
              </div>
            </li>
            <li id="opc-shipping" class="section">
              <div class="step-title">
                <span class="number">3</span>
                <h3 class="one_page_heading">Shipping Information</h3>
                <!--<a href="#">Edit</a>-->
              </div>
              <div id="checkout-step-shipping" class="step a-item" style="display: none;">
                <form id="co-shipping-form">
                  <fieldset class="group-select">
                    <ul>
                      <li id="shipping-new-address-form">
                        <fieldset>
                          <input type="hidden" name value="9681" id="shipping:address_id" />
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
                                    onchange="shipping.setSameAsBilling(false)"
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
                                    onchange="shipping.setSameAsBilling(false)"
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
                                  onchange="shipping.setSameAsBilling(false);"
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
                                onchange="shipping.setSameAsBilling(false);"
                              />
                            </li>
                            <li>
                              <input
                                type="text"
                                title="Street Address 2"
                                name
                                id="shipping:street2"
                                class="input-text"
                                onchange="shipping.setSameAsBilling(false);"
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
                                  onchange="shipping.setSameAsBilling(false);"
                                />
                              </div>
                              <div id="div" class="input-box">
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
                                  <option value>Please select region, state or province</option>
                                  <option value="1">Alabama</option>
                                  <option value="2">Alaska</option>
                                  <option value="3">American Samoa</option>
                                </select>
                                <input
                                  type="text"
                                  id="shipping:region"
                                  name="shipping[region]"
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
                                  onchange="shipping.setSameAsBilling(false);"
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
                                  onchange="shipping.setSameAsBilling(false);"
                                >
                                  <option value></option>
                                  <option value="AF">Afghanistan</option>
                                  <option value="AL">Albania</option>
                                  <option value="DZ">Algeria</option>
                                  <option value="AS">American Samoa</option>
                                  <option value="AD">Andorra</option>
                                  <option value="AO">Angola</option>
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
                                  name="shipping[telephone]"
                                  title="Telephone"
                                  class="input-text"
                                  id="shipping:telephone"
                                />
                              </div>
                              <div class="input-box">
                                <label for="shipping:fax">Fax</label>
                                <br />
                                <input
                                  type="text"
                                  name="shipping[fax]"
                                  title="Fax"
                                  class="input-text"
                                  id="shipping:fax"
                                  onchange="shipping.setSameAsBilling(false);"
                                />
                              </div>
                            </li>
                            <li class="no-display">
                              <input type="hidden" name="shipping[save_in_address_book]" value="1" />
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                name="shipping[same_as_billing]"
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
                    <p class="required">* Required Fields</p>
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
                <span class="number">4</span>
                <h3 class="one_page_heading">Shipping Method</h3>
                <!--<a href="#">Edit</a>-->
              </div>
              <div id="checkout-step-shipping_method" class="step a-item" style="display: none;">
                <form id="co-shipping-method-form">
                  <fieldset>
                    <div id="checkout-shipping-method-load">
                      <p>Sorry, no quotes are available for this order at this time.</p>
                    </div>
                    <div id="onepage-checkout-shipping-method-additional-load">
                      <div class="add-gift-message">
                        <h4>Do you have any gift items in your order?</h4>
                        <p>
                          <input
                            type="checkbox"
                            name="allow_gift_messages"
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
                <span class="number">5</span>
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
                        name="payment[method]"
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
                        name="payment[method]"
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
                                title="Name on Card"
                                class="input-text"
                                id="ccsave_cc_owner"
                                name="payment[cc_owner]"
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
                                name="payment[cc_type]"
                                class="required-entry validate-cc-type-select"
                              >
                                <option value>--Please Select--</option>
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
                                name="payment[cc_number]"
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
                                  name="payment[cc_exp_month]"
                                  class="required-entry"
                                >
                                  <option selected="selected">Month</option>
                                  <option value="1">01 - January</option>
                                  <option value="2">02 - February</option>
                                  <option value="3">03 - March</option>
                                  <option value="4">04 - April</option>
                                </select>
                              </div>
                              <div class="v-fix">
                                <select
                                  disabled
                                  id="ccsave_expiration_yr"
                                  style="width: 103px;"
                                  name="payment[cc_exp_year]"
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
                                  disabled
                                  title="Card Verification Number"
                                  class="input-text"
                                  id="ccsave_cc_cid"
                                  name="payment[cc_cid]"
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
                <p class="required">* Required Fields</p>
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
                <span class="number">6</span>
                <h3 class="one_page_heading">Order Review</h3>
                <!--<a href="#">Edit</a>-->
              </div>
              <div id="checkout-step-review" class="step a-item" style="display: none;">
                <div class="order-review" id="checkout-review-load"></div>
                <div class="buttons-set13" id="review-buttons-container">
                  <p class="f-left">
                    Forgot an Item?
                    <a href="#/checkout/cart/">Edit Your Cart</a>
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