import { Product } from './product';

export const PRODUCTS: Product [] = [
  // ----------------------------- marketplace-------------------------------------
  {
    title: 'SAAS MARKETPLACE',
    shortcut: 'ineedatractor',
    preamble: `Have an idea to run your business in a smarter and more efficient way without a
      need to buy and deploy the software itself? Take an advantage of using already
    	installed and configured SaaS solutions, and thus reduce your time to benefit.`,
    img: '',
    shortDescription: `How can a SaaS benefit your business?`,
    shortDescriptionList: [
      `It costs less comparing to its legacy system;`,
      `It cuts  overhead costs;`,
      `It enables collaboration in large and decentralized teams;`,
      `It saves the time needed for setup and training;`,
      `It facilitates access to data;`,
      `It eliminates the burden of a proprietary software upgrading and maintenance`
    ],
    prodName: 'Ineedatractor.com',
    prodDescriotion: '- a modern online service and a mobile application to rent construction equipment and specialized vehicles.',
    prodFeatures: [
      {
        name : 'Catalogue',
        property : ` - One of the most complete existing in the market nowadays.
         Our catalogue enables a user to find any machinery and equipment in the selected district,
         compare the prices, and choose a subcontractor that meets all the requirements. We don’t
         charge the equipment owners for being present in the catalogue, though provide them with a
         ient tool to display their assortment and manage the orders. We take the responsibility for
         promoting your services and attracting new clients upon ourselves.`
      },
      {
        name : 'Orders',
        property : ` - Place an order by filling out a special blank on the website.
         All the equipment owners are immediately notified about a new order placement.
         The one to confirm his promptitude first fulfills the order. At the same time the
         service provides a fair mechanism of orders assignment across all the equipment owners..
         Access the incoming requests via your Personal account on the website or in the mobile
         app. `
      },
      {
        name : 'Reviews & Comments',
        property : ` - Stay informed about unreliable customers.
          If you have a negative experience in working with any particular customer,
          leave your comment and help all the system users be updated on the matter.
          The comments automatically pop up with a new order placement.`
      },
      {
        name : 'Agreements',
        property : ` – Get immediate access to the templates of contracts and agreements to
          build partnership relations with your customers. All the documents are developed in
         accordance with the law and secure the interests of both of the parties. `
      },
      {
        name : 'Mobile App',
        property : `App – Stay connected and receive orders on the go. Download the mobile app
          from Google or App Store and place the actual orders and get new orders at any time to
          avoid idle periods or dry runs.`
      }
    ]
  },
  // ----------------------------- crm-------------------------------------
  {
    title: 'SolidExCRM',
    shortcut: 'crm',
    preamble: `Online Booking - Let your customers check in all by themselves.
     This function enables a 24/7 booking and excludes any overlapping errors. Extremely useful for
     large studios seeking to off-load the receptionists. The calendar implemented in our system has much
     in common with the Google calendar. It makes an opportunity to trace the current schedule of available
     and appropriate halls in one window. In addition, any action is fixed in the history, so it makes it
     impossible to remove the reservation without a trace.`,
    img: '',
    shortDescription: ``,
    shortDescriptionList: [
      `A purpose designed application for the site;`,
      `A special code is required for the installation on the site;`,
      `A new contact confirmation by SMS.`,
    ],
    prodName: '',
    prodDescriotion: '',
    prodFeatures: [
      {
        name : 'Online payment',
        property : ` - Receive bills via SMS.
          All the invoices issued after the payment are automatically linked to the bookings and
        	marked as paid/ partially paid without any administrator involvement.`
      },
      {
        name : 'Automatic annulment',
        property : `- If a payment fails to go through in due time, the entry for the customer
          is canceled automatically from the system.`
      },
      {
        name : 'Activity',
        property : ` - Keep the track record of the history.
        All the customers’ performance is accumulated in the Activity folder, so nothing remains
        without a trace.`
      },
      {
        name : 'Tasks',
        property : ` – Manage your workflow in one place.
        With the best practices of Agile & Kanban methodology implemented in the system, our
        task module gives a chance to create and edit tasks in 1 click.  Assign duty-holders and
        trace the tasks execution. `
      },
      {
        name : 'CRM',
        property : `-  Collect orders through our system, aggregate them with an on-line
        form, and monitor the progress in the sales funnel.`
      },
      {
        name : 'Contracts ',
        property : `-  Draft a contract on the go. This module allows to draw up the agreements right in
          the system without a need to use any other editor program. Open an order made through our system and print
          the contract promptly!`
      },
      {
        name : 'Clients',
        property : `-  maintain your customer’ satisfaction and high loyalty degree. Based
          on the visits frequency, booking cancellation number and the timeliness of such actions,
          the system calculates a customer reliability level. Considering these metrics, a client is
          apt to set the upfront payment amount to prevent the halls standstill because of the
          customer disloyalty. A single data base makes it possible to trace the negative customer
          statistics across all the studios. All client activity is private for each studio. That is,
          other studios will not see the activity of your customers.`
      },
      {
        name : 'Black list',
        property : `-  This function allows you to block clients who violate the rules of the
        studio. Invoicing can be done both automatically (non-appearance, late cancellation,
        and in manual (violation of rules in the studio, property damage). Any financial claim is
        accompanied by an automatic sending of the check-link, after which the client can pay
        for the default, thereby removing the lock. One of the advantages of the function is the
        ability to configure automatic actions with the remaining armor in cases when the client
         does not pay the bill in a given time.`
      },
      {
        name : 'Statistics',
        property : `-  function, which will help to see the following statistics for the selected period:
          the amount of arrival for each room, the total sum of the arrival, as well as on weekends / weekdays, the number
         of hours sold is common and on weekends / weekdays. A convenient filter by type of payment will help to see
          additional information for the period by selecting the type of payment types. Depending on the initial settings,
          it can be: "Cash", "Card", "On-line payment", "Claim", and others.`
      },
    ]
  }
];

