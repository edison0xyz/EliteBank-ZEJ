package org.zej.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
@Entity
@XmlRootElement
public class Portfolio implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;
	@Version
	@Column(name = "version")
	private int version;

	@Column
	private float netValue;

	@Column
	private String portfolioID;

	@Column
	private String managingAgent;

	public Long getId() {
		return this.id;
	}

	public void setId(final Long id) {
		this.id = id;
	}

	public int getVersion() {
		return this.version;
	}

	public void setVersion(final int version) {
		this.version = version;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof Portfolio)) {
			return false;
		}
		Portfolio other = (Portfolio) obj;
		if (id != null) {
			if (!id.equals(other.id)) {
				return false;
			}
		}
		return true;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	public float getNetValue() {
		return netValue;
	}

	public void setNetValue(float netValue) {
		this.netValue = netValue;
	}

	public String getPortfolioID() {
		return portfolioID;
	}

	public void setPortfolioID(String portfolioID) {
		this.portfolioID = portfolioID;
	}

	public String getManagingAgent() {
		return managingAgent;
	}

	public void setManagingAgent(String managingAgent) {
		this.managingAgent = managingAgent;
	}

	@Override
	public String toString() {
		String result = getClass().getSimpleName() + " ";
		result += "netValue: " + netValue;
		if (portfolioID != null && !portfolioID.trim().isEmpty())
			result += ", portfolioID: " + portfolioID;
		if (managingAgent != null && !managingAgent.trim().isEmpty())
			result += ", managingAgent: " + managingAgent;
		return result;
	}
}