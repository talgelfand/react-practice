import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import ContactsForm from "../../components/ContactsForm";

function ContactsPage() {
  return (
    <div>
      <Header />
      <PageTitle title="Enter your contacts" />
      <ContactsForm />
    </div>
  );
}

export default ContactsPage;
