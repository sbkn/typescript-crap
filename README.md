# Crafter

This service handles post-application document upload.

![Crafter process](./documentation/Crafter_drawio.png)

Crafter.createProcess: Crates a process and triggers sending of email to user
Crafter.processCustomerDocs: Handles processing of customer docs (copying from Up and triggering archiving)

## 3 Structure and process steps

1. Customer support creates a case by using a website [data needed: Backend-ID, eMail of customer support, productId & optionally: firstName, lastName of customer]
2. Crafter.createProcess creates a case by saving meta data in DB, customer data to S3 and generating an ID and a URL for customer
3. Customer support sends eMail to customer (URL included)
4. User follows link to document upload website
5. User uploads files
6. User confirms uploaded files by clicking a button on website -> API call to Crafter.processCustomerDocs
7. Crafter.processCustomerDocs copies files from Up S3 to SpaceFox bucket
8. Crafter.processCustomerDocs updates entry in DB and invokes SpaceFox.handleDocuments
9. SpaceFox archives files by sending to on-premise applications
10. Crafter.processCustomerDocs retrieves data from own bucket for eMail for customer support

## Example events:

Crafter.createProcess:
```
{
    internalCorrelationId: "foo-id",
    productId: "GIRO",
    support: {
        email: "foo@bar.com"
    },
    customer: {
        salutation: "Frau",
        firstName: "Janne",
        lastName: "Schmidt"
    }
}
```

Crafter.processCustomerDocs:
```
{
	"transactionId": "79930db2-1852-473f-9d20-62865377ca88",
	"sessionId": "3260e489-6d14-4b9b-876c-eca79823f1da",
	"uploadedDocuments": [
	    {
	        "id": "6df3c95c-c22d-4278-8414-c3464722c876"
	    }
	 ]
}
```


