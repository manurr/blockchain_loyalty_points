/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/* global getParticipantRegistry emit */

/**
 * Admin_to_Customer transaction
 * @param {org.example.lpnetwork.Admin_to_Customer} adminPoints
 * @transaction
 */
async function Admin_to_Customer(adminPoints) {

    if(adminPoints.admin.wallet_points<adminPoints.wallet_points){
  throw new Error('Insufficient balance');
  }

  //update customer points
  adminPoints.admin.wallet_points=adminPoints.admin.wallet_points-adminPoints.wallet_points;
  adminPoints.customer.wallet_points = adminPoints.customer.wallet_points + adminPoints.wallet_points;
  

  //update member
  const customerRegistry = await getParticipantRegistry('org.example.lpnetwork.Customer');
  await customerRegistry.update(adminPoints.customer);

  // check if partner exists on the network
  const adminRegistry = await getParticipantRegistry('org.example.lpnetwork.Admin');
  await adminRegistry.update(adminPoints.admin);
  // brandExists = await brandRegistry.exists(brandPoints.brand.id);
  // if (brandExists == false) {
    // throw new Error('Brand does not exist - check brand id');
  // }

}
/**
 * Admin_to_Brand transaction
 * @param {org.example.lpnetwork.Admin_to_Brand} adminPoints
 * @transaction
 */

async function Admin_to_Brand(adminPoints) {

    if(adminPoints.admin.wallet_points<adminPoints.wallet_points){
  throw new Error('Insufficient balance');
  }

  //update customer points
  adminPoints.admin.wallet_points=adminPoints.admin.wallet_points-adminPoints.wallet_points;
  adminPoints.brand.wallet_points = adminPoints.brand.wallet_points + adminPoints.wallet_points;
  

  //update member
  const brandRegistry = await getParticipantRegistry('org.example.lpnetwork.Brand');
  await brandRegistry.update(adminPoints.brand);

  // check if partner exists on the network
  const adminRegistry = await getParticipantRegistry('org.example.lpnetwork.Admin');
  await adminRegistry.update(adminPoints.admin);
  // brandExists = await brandRegistry.exists(brandPoints.brand.id);
  // if (brandExists == false) {
    // throw new Error('Brand does not exist - check brand id');
  // }

}
/**
 * Brand_to_Store transaction
 * @param {org.example.lpnetwork.Brand_to_Store} brandPoints
 * @transaction
 */

async function Brand_to_Store(brandPoints) {

    if(brandPoints.brand.wallet_points<brandPoints.wallet_points){
  throw new Error('Insufficient balance');
  }

  //update customer points
  brandPoints.brand.wallet_points=brandPoints.brand.wallet_points-brandPoints.wallet_points;
  brandPoints.store.wallet_points = brandPoints.store.wallet_points + brandPoints.wallet_points;
  

  //update member
  const storeRegistry = await getParticipantRegistry('org.example.lpnetwork.Store');
  await storeRegistry.update(brandPoints.store);

  // check if partner exists on the network
  const brandRegistry = await getParticipantRegistry('org.example.lpnetwork.Brand');
  await brandRegistry.update(brandPoints.brand);
  // brandExists = await brandRegistry.exists(brandPoints.brand.id);
  // if (brandExists == false) {
    // throw new Error('Brand does not exist - check brand id');
  // }

}
/**
 * Brand_to_Customer transaction
 * @param {org.example.lpnetwork.Brand_to_Customer} brandPoints
 * @transaction
 */
async function Brand_to_Customer(brandPoints) {

    if(brandPoints.brand.wallet_points<brandPoints.wallet_points){
  throw new Error('Insufficient balance');
  }

  //update customer points
  brandPoints.brand.wallet_points=brandPoints.brand.wallet_points-brandPoints.wallet_points;
  brandPoints.customer.wallet_points = brandPoints.customer.wallet_points + brandPoints.wallet_points;
  

  //update member
  const customerRegistry = await getParticipantRegistry('org.example.lpnetwork.Customer');
  await customerRegistry.update(brandPoints.customer);

  // check if partner exists on the network
  const brandRegistry = await getParticipantRegistry('org.example.lpnetwork.Brand');
  await brandRegistry.update(brandPoints.brand);
  // brandExists = await brandRegistry.exists(brandPoints.brand.id);
  // if (brandExists == false) {
    // throw new Error('Brand does not exist - check brand id');
  // }

}
/**
 * Store_to_Customer transaction
 * @param {org.example.lpnetwork.Store_to_Customer} storePoints
 * @transaction
 */
async function Store_to_Customer(storePoints) {

    if(storePoints.store.wallet_points<storePoints.wallet_points){
  throw new Error('Insufficient balance');
  }

  //update customer points
  storePoints.store.wallet_points=storePoints.store.wallet_points-storePoints.wallet_points;
  storePoints.customer.wallet_points = storePoints.customer.wallet_points + storePoints.wallet_points;
  

  //update member
  const customerRegistry = await getParticipantRegistry('org.example.lpnetwork.Customer');
  await customerRegistry.update(storePoints.customer);

  // check if partner exists on the network
  const storeRegistry = await getParticipantRegistry('org.example.lpnetwork.Brand');
  await storeRegistry.update(storePoints.store);
  // brandExists = await brandRegistry.exists(brandPoints.brand.id);
  // if (brandExists == false) {
    // throw new Error('Brand does not exist - check brand id');
  // }

}
/**
 * RedeemPoints_to_Brand transaction
 * @param {org.example.lpnetwork.RedeemPoints_to_Brand} customerPoints
 * @transaction
 */
async function RedeemPoints_to_Brand(customerPoints) {

    if(customerPoints.customer.wallet_points<customerPoints.wallet_points){
  throw new Error('Insufficient balance');
  }

  //update customer points
  customerPoints.customer.wallet_points = customerPoints.customer.wallet_points-customerPoints.wallet_points;
  customerPoints.brand.wallet_points=customerPoints.brand.wallet_points+customerPoints.wallet_points;
 
  

  //update member
  const customerRegistry = await getParticipantRegistry('org.example.lpnetwork.Customer');
  await customerRegistry.update(customerPoints.customer);

  // check if partner exists on the network
  const brandRegistry = await getParticipantRegistry('org.example.lpnetwork.Brand');
  await brandRegistry.update(customerPoints.brand);
  // brandExists = await brandRegistry.exists(brandPoints.brand.id);
  // if (brandExists == false) {
    // throw new Error('Brand does not exist - check brand id');
  // }

}
/**
 * RedeemPoints_to_Store transaction
 * @param {org.example.lpnetwork.RedeemPoints_to_Store} customerPoints
 * @transaction
 */

async function RedeemPoints_to_Store(customerPoints) {

    if(customerPoints.customer.wallet_points<customerPoints.wallet_points){
  throw new Error('Insufficient balance');
  }

  //update customer points
  customerPoints.customer.wallet_points = customerPoints.customer.wallet_points-customerPoints.wallet_points;
  customerPoints.store.wallet_points=customerPoints.store.wallet_points+customerPoints.wallet_points;
 
  

  //update member
  const customerRegistry = await getParticipantRegistry('org.example.lpnetwork.Customer');
  await customerRegistry.update(customerPoints.customer);

  // check if partner exists on the network
  const storeRegistry = await getParticipantRegistry('org.example.lpnetwork.Store');
  await storeRegistry.update(customerPoints.store);
  // brandExists = await brandRegistry.exists(brandPoints.brand.id);
  // if (brandExists == false) {
    // throw new Error('Brand does not exist - check brand id');
  // }

}



/**
 * SharePoints transaction
 * @param {org.example.lpnetwork.SharePoints} sharePoints
 * @transaction
 */

async function SharePoints(sharePoints) {

  if(sharePoints.from.wallet_points<sharePoints.wallet_points){
  throw new Error('Insufficient balance');
  }
   sharePoints.from.wallet_points-=sharePoints.wallet_points;
  sharePoints.to.wallet_points+=sharePoints.wallet_points;

  //update member
  const customerRegistry = await getParticipantRegistry('org.example.lpnetwork.Customer');
  await customerRegistry.update(sharePoints.from);

  // const memberRegistry1 = await getParticipantRegistry('org.example.mynetwork.Member');
  await customerRegistry.update(sharePoints.to);
}



