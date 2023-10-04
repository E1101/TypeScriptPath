/**
 * This pattern deals with simplifying the process of creating complex objects.
 * Builder is a creational design pattern that you can use to deal with the
 * step-by-step construction of objects that can have multiple future representations.
 * Quite often you create objects that take more than two or three parameters and
 * many of those parameters are not known ahead of time. They are required, though,
 * to initialize the object with the right state.
 *
 * In other cases, we want to have a conceptual class model such as a User or
 * SearchQuery string, or HTTPRequest. Initially, you can have only one implementation
 * of the class but when you want to create more than one, you end up with duplicated code.
 */

/**
 * The classic Gang of Four design patterns book also includes the Director object
 * when describing this pattern. You can think of this object as an abstraction on
 * top of the ProductBuilder interface that acts as a simple interface behind a
 * complex system; it consolidates those steps for producing certain products utilizing
 * one method instead of chaining multiple ones. You can accept the Builder interface.
 */
export class Website {
  constructor(
    public name?: string,
    public host?: string,
    public port?: number,
    public adminEmail?: string,
    public content?: string,
    public isPremium?: boolean
  ) {}
}

export interface WebsiteBuilder {
  setName(name: string): WebsiteBuilder;
  setHost(host: string): WebsiteBuilder;
  setPort(port: number): WebsiteBuilder;
  setAdminEmail(email: string): WebsiteBuilder;
  setContent(content: string): WebsiteBuilder;
  setIsPremium(isPremium: boolean): WebsiteBuilder;
  build(): Website;
}

export class PremiumWebsiteBuilder implements WebsiteBuilder {
  private website: Website;
  constructor() {
    this.website = new Website();
    this.clear();
  }

  setName(name: string): WebsiteBuilder {
    this.website.name = name;
    return this;
  }

  setHost(host: string): WebsiteBuilder {
    this.website.host = host;
    return this;
  }

  setPort(port: number): WebsiteBuilder {
    this.website.port = port;
    return this;
  }

  setAdminEmail(email: string): WebsiteBuilder {
    this.website.adminEmail = email;
    return this;
  }

  setContent(content: string): WebsiteBuilder {
    this.website.content = content;
    return this;
  }

  setIsPremium(): WebsiteBuilder {
    this.website.isPremium = true;
    return this;
  }

  build(): Website {
    const website = this.website;
    this.clear();
    return website;
  }

  clear(): void {
    this.website = new Website();
    // We have provided a specialized representation of a premium
    // website model as denoted by the isPremium property.
    this.website.isPremium = true;
  }
}

const wb = new PremiumWebsiteBuilder();
wb.setName("example").setHost("localhost").setPort(3000);

const website = wb.build();
